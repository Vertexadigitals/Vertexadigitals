import Link from "next/link";
import { ArrowRight, CheckCircle, AlertTriangle, XCircle, Info } from "lucide-react";

import type { AuditResult } from "@/components/sections/audit/AuditTool";

// ─── Types ────────────────────────────────────────────────────────────────────

type CwvStatus = "good" | "needs-improvement" | "poor" | "unknown";
type ImpactLevel = "critical" | "high" | "medium" | "low";

// ─── CWV meta ─────────────────────────────────────────────────────────────────

const CWV_META: Record<string, { abbr: string; full: string; description: string }> = {
  lcp: {
    abbr: "LCP",
    full: "Largest Contentful Paint",
    description: "How fast the largest visible element loads",
  },
  fid: {
    abbr: "INP",
    full: "Interaction to Next Paint",
    description: "How quickly the page responds to input",
  },
  cls: {
    abbr: "CLS",
    full: "Cumulative Layout Shift",
    description: "How much content unexpectedly shifts during load",
  },
  fcp: {
    abbr: "FCP",
    full: "First Contentful Paint",
    description: "Time until first content appears on screen",
  },
  ttfb: {
    abbr: "TTFB",
    full: "Time to First Byte",
    description: "How fast the server starts sending a response",
  },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function cwvStyles(status: CwvStatus) {
  switch (status) {
    case "good":
      return {
        value: "text-green-600",
        badge: "bg-green-50 text-green-700 border-green-200",
        border: "border-green-200 bg-green-50/30",
        label: "Good",
      };
    case "needs-improvement":
      return {
        value: "text-yellow-600",
        badge: "bg-yellow-50 text-yellow-700 border-yellow-200",
        border: "border-yellow-200 bg-yellow-50/30",
        label: "Improve",
      };
    case "poor":
      return {
        value: "text-red-600",
        badge: "bg-red-50 text-red-700 border-red-200",
        border: "border-red-200 bg-red-50/30",
        label: "Poor",
      };
    default:
      return {
        value: "text-neutral-400",
        badge: "bg-neutral-100 text-neutral-500 border-neutral-200",
        border: "border-neutral-200 bg-white",
        label: "N/A",
      };
  }
}

function impactStyles(impact: ImpactLevel) {
  switch (impact) {
    case "critical":
      return { badge: "bg-red-50 text-red-700 border-red-200", label: "Critical" };
    case "high":
      return { badge: "bg-orange-50 text-orange-700 border-orange-200", label: "High" };
    case "medium":
      return { badge: "bg-yellow-50 text-yellow-700 border-yellow-200", label: "Medium" };
    case "low":
      return { badge: "bg-blue-50 text-blue-700 border-blue-200", label: "Low" };
  }
}

function impactOrder(impact: ImpactLevel) {
  return { critical: 0, high: 1, medium: 2, low: 3 }[impact];
}

function ImpactIcon({ impact }: { impact: ImpactLevel }) {
  const cls = "size-4 shrink-0 mt-0.5";
  switch (impact) {
    case "critical": return <XCircle className={`${cls} text-red-500`} aria-hidden="true" />;
    case "high":     return <AlertTriangle className={`${cls} text-orange-500`} aria-hidden="true" />;
    case "medium":   return <Info className={`${cls} text-yellow-500`} aria-hidden="true" />;
    case "low":      return <CheckCircle className={`${cls} text-blue-400`} aria-hidden="true" />;
  }
}

// ─── CWV Card ─────────────────────────────────────────────────────────────────

function CwvCard({
  metaKey,
  vital,
}: {
  metaKey: string;
  vital: AuditResult["coreWebVitals"]["lcp"];
}) {
  const meta = CWV_META[metaKey] ?? { abbr: metaKey.toUpperCase(), full: metaKey, description: "" };
  const s = cwvStyles(vital.status as CwvStatus);

  return (
    <div
      className={`flex flex-col rounded-xl border p-4 ${s.border}`}
      aria-label={`${meta.full}: ${vital.displayValue} — ${s.label}`}
    >
      {/* Header row */}
      <div className="flex items-center justify-between gap-1">
        <span className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
          {meta.abbr}
        </span>
        <span className={`rounded-full border px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${s.badge}`}>
          {s.label}
        </span>
      </div>

      {/* Value */}
      <p className={`mt-3 text-[1.6rem] font-bold leading-none tabular-nums ${s.value}`}>
        {vital.displayValue}
      </p>

      {/* Labels */}
      <p className="mt-2 text-[11px] font-semibold text-neutral-700 leading-tight">
        {meta.full}
      </p>
      <p className="mt-0.5 text-[10px] leading-snug text-neutral-400">
        {meta.description}
      </p>
    </div>
  );
}

// ─── Issue Row ────────────────────────────────────────────────────────────────

function IssueRow({ issue }: { issue: AuditResult["issues"][number] }) {
  const s = impactStyles(issue.impact as ImpactLevel);

  return (
    <li className="flex gap-3 py-4 border-b border-neutral-100 last:border-0 last:pb-0 first:pt-0">
      <ImpactIcon impact={issue.impact as ImpactLevel} />

      <div className="flex-1 min-w-0">
        {/* Title row */}
        <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${s.badge}`}>
              {s.label}
            </span>
            <span className="text-sm font-semibold text-neutral-900">
              {issue.title}
            </span>
          </div>
          {issue.displayValue && (
            <span className="shrink-0 rounded bg-neutral-100 px-2 py-0.5 text-[11px] font-medium tabular-nums text-neutral-500">
              {issue.displayValue}
            </span>
          )}
        </div>

        {/* Fix */}
        {issue.howToFix && (
          <p className="mt-2 text-xs leading-relaxed text-neutral-600">
            <span className="font-semibold text-neutral-800">Fix: </span>
            {issue.howToFix}
          </p>
        )}
      </div>
    </li>
  );
}

// ─── Issue group ──────────────────────────────────────────────────────────────

function IssueGroup({
  label,
  issues,
}: {
  label: string;
  issues: AuditResult["issues"];
}) {
  if (issues.length === 0) return null;
  return (
    <div>
      <h3 className="mb-1 text-[11px] font-bold tracking-widest text-neutral-400 uppercase">
        {label}
      </h3>
      <ul>
        {issues.map((issue) => (
          <IssueRow key={issue.id} issue={issue} />
        ))}
      </ul>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

interface AuditResultsProps {
  result: AuditResult;
}

export function AuditResults({ result }: AuditResultsProps) {
  const cwvKeys = ["lcp", "fid", "cls", "fcp", "ttfb"] as const;

  const allIssues = [...result.issues].sort(
    (a, b) => impactOrder(a.impact as ImpactLevel) - impactOrder(b.impact as ImpactLevel)
  );

  const critical = allIssues.filter((i) => i.impact === "critical");
  const high     = allIssues.filter((i) => i.impact === "high");
  const medium   = allIssues.filter((i) => i.impact === "medium");
  const low      = allIssues.filter((i) => i.impact === "low");

  const urgentCount = critical.length + high.length;

  // How many CWVs are poor/needs-improvement
  const cwvPoorCount = cwvKeys.filter(
    (k) => result.coreWebVitals[k].status === "poor" || result.coreWebVitals[k].status === "needs-improvement"
  ).length;

  return (
    <div className="space-y-5">

      {/* ── Core Web Vitals ──────────────────────────────────────────── */}
      <div className="rounded-2xl border border-neutral-200/60 bg-white p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 className="font-serif text-xl font-medium text-neutral-900">
              Core Web Vitals
            </h2>
            <p className="mt-0.5 text-sm text-neutral-500">
              Google ranking signals — measured on mobile.
            </p>
          </div>
          {cwvPoorCount > 0 && (
            <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
              {cwvPoorCount} metric{cwvPoorCount !== 1 ? "s" : ""} need attention
            </span>
          )}
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {cwvKeys.map((key) => (
            <CwvCard key={key} metaKey={key} vital={result.coreWebVitals[key]} />
          ))}
        </div>

        {/* CWV legend */}
        <div className="mt-4 flex flex-wrap gap-4 border-t border-neutral-100 pt-4">
          {[
            { color: "bg-green-500", label: "Good" },
            { color: "bg-yellow-500", label: "Needs Improvement" },
            { color: "bg-red-500", label: "Poor" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-1.5">
              <span className={`size-2 rounded-full ${item.color}`} />
              <span className="text-[11px] text-neutral-500">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Issues ───────────────────────────────────────────────────── */}
      {allIssues.length > 0 && (
        <div className="rounded-2xl border border-neutral-200/60 bg-white p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="font-serif text-xl font-medium text-neutral-900">
                Issues &amp; Recommendations
              </h2>
              <p className="mt-0.5 text-sm text-neutral-500">
                {allIssues.length} issue{allIssues.length !== 1 ? "s" : ""} found
                {urgentCount > 0 && ` — ${urgentCount} require immediate attention`}
              </p>
            </div>

            {/* Impact summary pills */}
            <div className="flex flex-wrap gap-2">
              {critical.length > 0 && (
                <span className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
                  {critical.length} Critical
                </span>
              )}
              {high.length > 0 && (
                <span className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
                  {high.length} High
                </span>
              )}
              {medium.length > 0 && (
                <span className="rounded-full border border-yellow-200 bg-yellow-50 px-3 py-1 text-xs font-semibold text-yellow-700">
                  {medium.length} Medium
                </span>
              )}
              {low.length > 0 && (
                <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {low.length} Low
                </span>
              )}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-6">
            <IssueGroup label="Critical" issues={critical} />
            <IssueGroup label="High Priority" issues={high} />
            <IssueGroup label="Medium Priority" issues={medium} />
            <IssueGroup label="Low Priority" issues={low} />
          </div>
        </div>
      )}

      {/* ── CTA banner ───────────────────────────────────────────────── */}
      <div className="overflow-hidden rounded-2xl bg-neutral-900">
        <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="max-w-lg">
            <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase">
              Next Step
            </p>
            <h2 className="mt-2 font-serif text-2xl font-medium text-white">
              Let&apos;s fix your website together.
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-400">
              Your site scored{" "}
              <span className="font-semibold text-white">
                {result.overallScore}/100
              </span>
              .{" "}
              {result.overallScore < 70
                ? "Our team can implement every fix above and get you to 90+ with measurable results."
                : "A few targeted improvements can push you to a perfect score and improve rankings."}
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:items-end">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-100"
            >
              Get a Free Improvement Plan
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-300 transition-colors hover:border-neutral-500 hover:text-white"
            >
              View Our Services
            </Link>
          </div>
        </div>

        {/* Stat strip */}
        <div className="grid grid-cols-3 divide-x divide-neutral-800 border-t border-neutral-800">
          {[
            { value: "15+", label: "Years of experience" },
            { value: "200+", label: "Sites optimised" },
            { value: "48h", label: "Avg. response time" },
          ].map((stat) => (
            <div key={stat.label} className="px-4 py-4 text-center sm:px-6">
              <p className="font-serif text-xl font-medium text-white">{stat.value}</p>
              <p className="mt-0.5 text-[11px] text-neutral-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
