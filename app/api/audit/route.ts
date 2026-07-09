import { NextResponse } from "next/server";
import { z } from "zod";

import {
  getClientIp,
  isAuditIpRateLimited,
  isAuditEmailRateLimited,
} from "@/lib/rate-limit";
import {
  submitAuditLead,
  sendAuditNotificationEmail,
  sendAuditConfirmationEmail,
} from "@/lib/brevo";

// ─── Validation ───────────────────────────────────────────────────────────────

const auditSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(7).max(20),
  company: z.string().max(100).optional(),
  url: z
    .string()
    .url()
    .refine(
      (val) => val.startsWith("http://") || val.startsWith("https://"),
      { message: "URL must start with http:// or https://" }
    ),
});

// ─── Types ────────────────────────────────────────────────────────────────────

type ImpactLevel = "critical" | "high" | "medium" | "low";

interface AuditIssue {
  id: string;
  title: string;
  impact: ImpactLevel;
  description: string;
  howToFix: string;
  displayValue?: string;
}

interface CoreWebVital {
  label: string;
  displayValue: string;
  numericValue: number;
  unit: string;
  score: number | null;
  status: "good" | "needs-improvement" | "poor" | "unknown";
}

interface AuditResult {
  scores: {
    performance: number;
    seo: number;
    accessibility: number;
    bestPractices: number;
  };
  overallGrade: "A" | "B" | "C" | "D" | "F";
  overallScore: number;
  issues: AuditIssue[];
  coreWebVitals: {
    lcp: CoreWebVital;
    fid: CoreWebVital;
    cls: CoreWebVital;
    fcp: CoreWebVital;
    ttfb: CoreWebVital;
  };
  url: string;
  fetchTime: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function toScore(raw: number | null | undefined): number {
  if (raw == null) return 0;
  return Math.round(raw * 100);
}

function toGrade(score: number): "A" | "B" | "C" | "D" | "F" {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

function toImpact(score: number | null): ImpactLevel {
  if (score == null || score === 0) return "critical";
  if (score < 0.5) return "high";
  if (score < 0.75) return "medium";
  return "low";
}

function lcpStatus(ms: number): CoreWebVital["status"] {
  if (ms <= 2500) return "good";
  if (ms <= 4000) return "needs-improvement";
  return "poor";
}

function fidStatus(ms: number): CoreWebVital["status"] {
  if (ms <= 100) return "good";
  if (ms <= 300) return "needs-improvement";
  return "poor";
}

function clsStatus(score: number): CoreWebVital["status"] {
  if (score <= 0.1) return "good";
  if (score <= 0.25) return "needs-improvement";
  return "poor";
}

function fcpStatus(ms: number): CoreWebVital["status"] {
  if (ms <= 1800) return "good";
  if (ms <= 3000) return "needs-improvement";
  return "poor";
}

function ttfbStatus(ms: number): CoreWebVital["status"] {
  if (ms <= 800) return "good";
  if (ms <= 1800) return "needs-improvement";
  return "poor";
}

type LighthouseAudit = {
  score: number | null;
  displayValue?: string;
  numericValue?: number;
  title?: string;
  description?: string;
};

function formatMs(ms: number): string {
  if (ms >= 1000) return `${(ms / 1000).toFixed(1)} s`;
  return `${Math.round(ms)} ms`;
}

function extractCwv(
  audits: Record<string, LighthouseAudit>,
  key: string,
  label: string,
  unit: string,
  statusFn: (n: number) => CoreWebVital["status"],
  formatValue?: (n: number) => string
): CoreWebVital {
  const audit = audits[key];
  if (!audit) {
    return {
      label,
      displayValue: "N/A",
      numericValue: 0,
      unit,
      score: null,
      status: "unknown",
    };
  }
  const numericValue = audit.numericValue ?? 0;
  const displayValue = formatValue
    ? formatValue(numericValue)
    : (audit.displayValue ?? "N/A");
  return {
    label,
    displayValue,
    numericValue,
    unit,
    score: audit.score,
    status: statusFn(numericValue),
  };
}

// Audit IDs surfaced as issues, ordered by priority
const PRIORITY_AUDITS = [
  // Performance — critical savings
  "render-blocking-resources",
  "unused-javascript",
  "unused-css-rules",
  "uses-optimized-images",
  "uses-responsive-images",
  "uses-webp-images",
  "uses-text-compression",
  "time-to-first-byte",
  "uses-long-cache-ttl",
  "efficient-animated-content",
  "preload-lcp-image",
  "font-display",
  "dom-size",
  "bootup-time",
  "mainthread-work-breakdown",
  "total-blocking-time",
  "speed-index",
  "legacy-javascript",
  "duplicated-javascript",
  "uses-passive-event-listeners",
  "non-composited-animations",
  "bf-cache",
  "third-party-summary",
  // SEO
  "meta-description",
  "document-title",
  "link-text",
  "crawlable-anchors",
  "is-crawlable",
  "robots-txt",
  "hreflang",
  "canonical",
  "structured-data",
  // Accessibility
  "image-alt",
  "label",
  "tap-targets",
  "color-contrast",
  "heading-order",
  "html-has-lang",
  "link-name",
  "button-name",
  "aria-required-attr",
  // Best practices / security
  "uses-https",
  "no-vulnerable-libraries",
  "uses-http2",
  "doctype",
  "charset",
  "deprecations",
  "errors-in-console",
  "geolocation-on-start",
  "notification-on-start",
];

function extractIssues(audits: Record<string, LighthouseAudit>): AuditIssue[] {
  const issues: AuditIssue[] = [];

  for (const id of PRIORITY_AUDITS) {
    const audit = audits[id];
    if (!audit) continue;
    const score = audit.score;
    // Skip passed audits (score >= 0.9) and informational audits (score === null with no displayValue)
    if (score !== null && score >= 0.9) continue;
    if (score === null && !audit.displayValue) continue;

    issues.push({
      id,
      title: audit.title ?? id,
      impact: toImpact(score),
      description: (audit.description ?? "").replace(/\[.*?\]\(.*?\)/g, "").trim(),
      howToFix: getHowToFix(id),
      displayValue: audit.displayValue,
    });

    if (issues.length >= 25) break;
  }

  return issues;
}

function getHowToFix(id: string): string {
  const fixes: Record<string, string> = {
    "render-blocking-resources":
      "Add defer or async to non-critical scripts. Inline critical CSS above the fold and defer the rest.",
    "unused-javascript":
      "Remove or defer JavaScript that isn't needed for the initial page load. Use code splitting.",
    "unused-css-rules":
      "Remove unused CSS rules or use a tool like PurgeCSS. Consider loading CSS on demand.",
    "uses-optimized-images":
      "Compress images and convert to WebP or AVIF format. Use tools like Squoosh or ImageOptim.",
    "uses-responsive-images":
      "Use srcset and sizes attributes to serve appropriately sized images for each device.",
    "uses-webp-images":
      "Convert PNG/JPEG images to WebP format, which is 25–35% smaller with equivalent quality.",
    "uses-text-compression":
      "Enable Gzip or Brotli compression on your server for text-based assets (HTML, CSS, JS).",
    "time-to-first-byte":
      "Improve server response time by upgrading hosting, enabling caching, or using a CDN.",
    "uses-long-cache-ttl":
      "Set long Cache-Control max-age headers for static assets and use content hashing for cache busting.",
    "efficient-animated-content":
      "Replace animated GIFs with video formats (WebM/MP4) which are dramatically smaller.",
    "dom-size":
      "Reduce the number of DOM nodes. Avoid deeply nested elements and remove unused nodes.",
    "bootup-time":
      "Reduce JavaScript execution time by splitting large bundles and deferring non-critical scripts.",
    "mainthread-work-breakdown":
      "Break up long tasks so the browser remains responsive. Use web workers for heavy computations.",
    "meta-description":
      "Add a unique meta description (150–160 characters) to every page for better SEO click-through rates.",
    "document-title":
      "Ensure every page has a descriptive, unique <title> tag (50–60 characters recommended).",
    "link-text":
      'Replace generic link text like "click here" with descriptive text that explains the destination.',
    "crawlable-anchors":
      "Ensure links use valid href attributes and are not blocked by JavaScript event handlers only.",
    "is-crawlable":
      "Remove noindex directives from pages you want search engines to index.",
    "robots-txt":
      "Ensure your robots.txt file is valid and not accidentally blocking important pages.",
    "image-alt":
      "Add descriptive alt attributes to all meaningful images for accessibility and SEO.",
    "label":
      "Ensure all form inputs have associated <label> elements for accessibility.",
    "tap-targets":
      "Make interactive elements at least 48×48px with adequate spacing for mobile users.",
    "color-contrast":
      "Increase text contrast to meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text).",
    "uses-https":
      "Serve all content over HTTPS and redirect HTTP to HTTPS. Obtain a free SSL certificate via Let's Encrypt.",
    "no-vulnerable-libraries":
      "Update JavaScript libraries with known vulnerabilities to their latest patched versions.",
    "uses-http2":
      "Enable HTTP/2 on your server to allow multiplexed requests and improve load times.",
    "preload-lcp-image":
      "Add <link rel='preload'> for the image that is your Largest Contentful Paint element.",
    "font-display":
      "Add font-display: swap or optional to @font-face rules so text remains visible during font load.",
    "total-blocking-time":
      "Reduce long JavaScript tasks (>50ms) by splitting them into smaller chunks and deferring non-critical work.",
    "speed-index":
      "Optimize the critical rendering path: inline critical CSS, defer non-critical scripts, use a CDN.",
    "legacy-javascript":
      "Configure your bundler to target modern browsers (ES2017+) to reduce polyfill overhead.",
    "duplicated-javascript":
      "Remove duplicate JavaScript modules from your bundle using bundle analysis tools like Webpack Bundle Analyzer.",
    "uses-passive-event-listeners":
      "Add { passive: true } to scroll and touch event listeners to unblock the main thread.",
    "non-composited-animations":
      "Animate only opacity and transform properties, which run on the GPU compositor thread.",
    "bf-cache":
      "Avoid using unload event listeners and Cache-Control: no-store to allow browsers to cache pages for instant back/forward navigation.",
    "third-party-summary":
      "Defer third-party scripts (analytics, chat widgets, ads) until after the main page loads.",
    "hreflang":
      "Add hreflang attributes to target international audiences and prevent duplicate content issues.",
    "canonical":
      "Add <link rel='canonical'> to each page to tell search engines the preferred URL.",
    "structured-data":
      "Add JSON-LD structured data (Organization, Product, FAQ, Article) to enhance search result appearance.",
    "heading-order":
      "Ensure headings follow a logical order (H1 → H2 → H3) without skipping levels.",
    "html-has-lang":
      "Add a lang attribute to the <html> element to help screen readers and search engines identify the page language.",
    "link-name":
      "Ensure all links have accessible names — use descriptive text or aria-label.",
    "button-name":
      "Ensure all buttons have accessible names via visible text, aria-label, or aria-labelledby.",
    "aria-required-attr":
      "Add all required ARIA attributes to elements that use ARIA roles.",
    "doctype":
      "Add <!DOCTYPE html> as the first line of every HTML page to ensure standards mode rendering.",
    "charset":
      "Add <meta charset='utf-8'> in the <head> to declare the character encoding.",
    "deprecations":
      "Remove or replace deprecated browser APIs highlighted in the report — they may be removed in future browser versions.",
    "errors-in-console":
      "Fix JavaScript errors logged in the console — they indicate broken functionality and hurt user experience.",
    "geolocation-on-start":
      "Only request geolocation permission in response to a user action, not on page load.",
    "notification-on-start":
      "Only request notification permission in response to a user action, not on page load.",
  };
  return fixes[id] ?? "Review the Lighthouse audit details for specific remediation steps.";
}

// ─── PageSpeed API call ───────────────────────────────────────────────────────

async function fetchPageSpeed(url: string): Promise<AuditResult> {
  const apiKey = process.env.GOOGLE_PAGESPEED_API_KEY;
  if (!apiKey) {
    throw new Error("GOOGLE_PAGESPEED_API_KEY is not configured");
  }

  const apiUrl = new URL(
    "https://www.googleapis.com/pagespeedonline/v5/runPagespeed"
  );
  apiUrl.searchParams.set("url", url);
  apiUrl.searchParams.set("key", apiKey);
  apiUrl.searchParams.set("strategy", "mobile");
  apiUrl.searchParams.append("category", "performance");
  apiUrl.searchParams.append("category", "seo");
  apiUrl.searchParams.append("category", "accessibility");
  apiUrl.searchParams.append("category", "best-practices");

  const response = await fetch(apiUrl.toString(), {
    next: { revalidate: 0 },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`PageSpeed API error ${response.status}: ${body.slice(0, 200)}`);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: any = await response.json();
  const lr = data.lighthouseResult;

  if (!lr) {
    throw new Error("PageSpeed API returned no Lighthouse result");
  }

  const categories = lr.categories ?? {};
  const audits: Record<string, LighthouseAudit> = lr.audits ?? {};

  const perfScore = toScore(categories.performance?.score);
  const seoScore = toScore(categories.seo?.score);
  const a11yScore = toScore(categories.accessibility?.score);
  const bpScore = toScore(categories["best-practices"]?.score);
  const overallScore = Math.round((perfScore + seoScore + a11yScore + bpScore) / 4);

  return {
    scores: {
      performance: perfScore,
      seo: seoScore,
      accessibility: a11yScore,
      bestPractices: bpScore,
    },
    overallScore,
    overallGrade: toGrade(overallScore),
    issues: extractIssues(audits),
    coreWebVitals: {
      lcp: extractCwv(audits, "largest-contentful-paint", "Largest Contentful Paint", "ms", lcpStatus),
      fid: extractCwv(
        audits,
        audits["interaction-to-next-paint"] ? "interaction-to-next-paint" : "max-potential-fid",
        "Interaction to Next Paint",
        "ms",
        fidStatus
      ),
      cls: extractCwv(audits, "cumulative-layout-shift", "Cumulative Layout Shift", "", clsStatus),
      fcp: extractCwv(audits, "first-contentful-paint", "First Contentful Paint", "ms", fcpStatus),
      ttfb: extractCwv(audits, "server-response-time", "Time to First Byte", "ms", ttfbStatus, formatMs),
    },
    url: data.id ?? url,
    fetchTime: lr.fetchTime ?? new Date().toISOString(),
  };
}

// ─── Route Handler ────────────────────────────────────────────────────────────

export async function POST(request: Request) {
  // Parse and validate body
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = auditSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  const { name, email, phone, company, url } = parsed.data;

  // Rate limit: IP (5/hour)
  const ip = getClientIp(request);
  if (isAuditIpRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests from your network. Please try again in an hour." },
      { status: 429 }
    );
  }

  // Rate limit: email (3/day)
  if (isAuditEmailRateLimited(email)) {
    return NextResponse.json(
      { error: "You have reached the daily audit limit for this email. Please try again tomorrow." },
      { status: 429 }
    );
  }

  // Split name into first/last
  const nameParts = name.trim().split(/\s+/);
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ") || "-";

  // Fetch PageSpeed data
  let auditResult: AuditResult;
  try {
    auditResult = await fetchPageSpeed(url);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("[Audit PageSpeed Error]", message);

    if (message.includes("GOOGLE_PAGESPEED_API_KEY")) {
      return NextResponse.json(
        { error: "Audit service is not configured. Please contact support." },
        { status: 503 }
      );
    }
    return NextResponse.json(
      { error: "Unable to analyze the URL. Please check it is publicly accessible and try again." },
      { status: 502 }
    );
  }

  // Capture lead in Brevo (non-blocking — don't fail the request if CRM is down)
  const leadData = {
    firstName,
    lastName,
    email,
    company,
    phone,
    websiteUrl: url,
    overallGrade: auditResult.overallGrade,
    overallScore: auditResult.overallScore,
    performanceScore: auditResult.scores.performance,
    seoScore: auditResult.scores.seo,
    accessibilityScore: auditResult.scores.accessibility,
    bestPracticesScore: auditResult.scores.bestPractices,
  };

  void Promise.all([
    submitAuditLead(leadData),
    sendAuditNotificationEmail(leadData),
    sendAuditConfirmationEmail({
      firstName,
      email,
      websiteUrl: url,
      overallGrade: auditResult.overallGrade,
      overallScore: auditResult.overallScore,
      performanceScore: auditResult.scores.performance,
      seoScore: auditResult.scores.seo,
      accessibilityScore: auditResult.scores.accessibility,
      bestPracticesScore: auditResult.scores.bestPractices,
    }),
  ]);

  return NextResponse.json({ success: true, result: auditResult });
}
