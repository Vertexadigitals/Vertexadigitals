"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { z } from "zod";
import { ArrowRight, ArrowLeft, Zap, AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuditResults } from "@/components/sections/audit/AuditResults";

// ─── Types ────────────────────────────────────────────────────────────────────

type Step = 1 | 2 | 3 | 4;

interface FormFields {
  name: string;
  email: string;
  phone: string;
  company: string;
  url: string;
}

interface AuditIssue {
  id: string;
  title: string;
  impact: "critical" | "high" | "medium" | "low";
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

export interface AuditResult {
  scores: {
    performance: number;
    seo: number;
    accessibility: number;
    bestPractices: number;
  };
  overallGrade: string;
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

// ─── Validation ───────────────────────────────────────────────────────────────

const step1Schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
});

const step2Schema = z.object({
  url: z
    .string()
    .min(1, "Please enter your website URL")
    .url("Please enter a valid URL — e.g. https://example.com"),
});

// ─── Constants ────────────────────────────────────────────────────────────────

const LOADING_MESSAGES = [
  "Connecting to your website…",
  "Analyzing page performance…",
  "Measuring Core Web Vitals…",
  "Running SEO checks…",
  "Evaluating accessibility…",
  "Reviewing best practices…",
  "Generating your report…",
];

const STEPS: { n: Step; label: string }[] = [
  { n: 1, label: "About You" },
  { n: 2, label: "Your Website" },
  { n: 3, label: "Analyzing" },
  { n: 4, label: "Report" },
];

const INPUT_CLS =
  "h-auto w-full rounded-lg border-neutral-200 bg-white px-4 py-3 text-sm placeholder:text-neutral-400 focus-visible:border-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1 transition-all duration-150 data-[size=default]:h-auto aria-invalid:border-red-500";

const LABEL_CLS =
  "text-xs font-medium tracking-wider text-neutral-600 uppercase";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function scoreColor(score: number) {
  if (score >= 90) return "text-green-600";
  if (score >= 70) return "text-yellow-600";
  if (score >= 50) return "text-orange-500";
  return "text-red-600";
}

function scoreBorderBg(score: number) {
  if (score >= 90) return "bg-green-50 border-green-200";
  if (score >= 70) return "bg-yellow-50 border-yellow-200";
  if (score >= 50) return "bg-orange-50 border-orange-200";
  return "bg-red-50 border-red-200";
}

function gradeRingColor(grade: string) {
  const map: Record<string, string> = {
    A: "bg-green-600",
    B: "bg-lime-600",
    C: "bg-yellow-500",
    D: "bg-orange-500",
    F: "bg-red-600",
  };
  return map[grade] ?? "bg-neutral-600";
}

// ─── Step progress ────────────────────────────────────────────────────────────

function StepProgress({ current }: { current: Step }) {
  return (
    <div className="flex items-start justify-center">
      {STEPS.map((s, i) => {
        const done = current > s.n;
        const active = current === s.n;
        return (
          <div key={s.n} className="flex items-center">
            <div className="flex flex-col items-center gap-2">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold transition-all duration-300 ${
                  done
                    ? "bg-neutral-900 text-white"
                    : active
                      ? "bg-neutral-900 text-white ring-4 ring-neutral-900/10"
                      : "border-2 border-neutral-200 bg-white text-neutral-400"
                }`}
              >
                {done ? "✓" : s.n}
              </div>
              <span
                className={`hidden text-[10px] font-medium tracking-wide uppercase sm:block ${
                  active || done ? "text-neutral-700" : "text-neutral-400"
                }`}
              >
                {s.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={`mx-2 mb-5 h-px w-10 transition-all duration-300 sm:w-14 ${
                  done ? "bg-neutral-900" : "bg-neutral-200"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Score card ───────────────────────────────────────────────────────────────

function ScoreCard({ label, score }: { label: string; score: number }) {
  return (
    <div className={`rounded-xl border p-4 text-center ${scoreBorderBg(score)}`}>
      <p className="text-[11px] font-medium tracking-wide text-neutral-500 uppercase">
        {label}
      </p>
      <p className={`mt-1.5 text-2xl font-bold tabular-nums ${scoreColor(score)}`}>
        {score}
      </p>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function AuditTool() {
  const [step, setStep] = useState<Step>(1);
  const [fields, setFields] = useState<FormFields>({
    name: "",
    email: "",
    phone: "",
    company: "",
    url: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormFields, string>>>({});
  const [result, setResult] = useState<AuditResult | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);
  const [msgIndex, setMsgIndex] = useState(0);

  // Payload captured at submit time so the effect never needs fields in its dep array
  const pendingRef = useRef<{
    name: string;
    email: string;
    phone: string;
    company?: string;
    url: string;
  } | null>(null);

  // Cycle loading messages while on step 3
  useEffect(() => {
    if (step !== 3) return;
    const id = setInterval(
      () => setMsgIndex((i) => (i + 1) % LOADING_MESSAGES.length),
      1900
    );
    return () => clearInterval(id);
  }, [step]);

  // Fire the audit API when step 3 is entered
  useEffect(() => {
    if (step !== 3 || !pendingRef.current) return;

    const payload = pendingRef.current;
    const controller = new AbortController();

    async function runAudit() {
      try {
        const res = await fetch("/api/audit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          signal: controller.signal,
        });

        const data = (await res.json().catch(() => ({}))) as {
          result?: AuditResult;
          error?: string;
        };

        if (!res.ok) {
          setApiError(data.error ?? "Something went wrong. Please try again.");
        } else if (data.result) {
          setResult(data.result);
        } else {
          setApiError("Unexpected response from server. Please try again.");
        }
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;
        setApiError(
          "Connection failed. Please check your network and try again."
        );
      }
      setStep(4);
    }

    void runAudit();
    return () => controller.abort();
  }, [step]);

  function updateField(key: keyof FormFields, value: string) {
    setFields((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function handleStep1Next(e: React.FormEvent) {
    e.preventDefault();
    const res = step1Schema.safeParse(fields);
    if (!res.success) {
      const errs: Partial<Record<keyof FormFields, string>> = {};
      for (const [k, msgs] of Object.entries(res.error.flatten().fieldErrors)) {
        errs[k as keyof FormFields] = (msgs as string[])[0];
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setStep(2);
  }

  function handleStep2Submit(e: React.FormEvent) {
    e.preventDefault();
    const res = step2Schema.safeParse({ url: fields.url });
    if (!res.success) {
      setErrors({ url: res.error.flatten().fieldErrors.url?.[0] });
      return;
    }
    setErrors({});
    pendingRef.current = {
      name: fields.name,
      email: fields.email,
      phone: fields.phone,
      company: fields.company || undefined,
      url: fields.url,
    };
    setMsgIndex(0);
    setStep(3);
  }

  function handleRetry() {
    setApiError(null);
    setResult(null);
    setStep(2);
  }

  // ── Step 1 ─────────────────────────────────────────────────────────────────

  const step1 = (
    <div className="mx-auto max-w-xl px-6">
      <div className="rounded-2xl border border-neutral-200/60 bg-neutral-50 p-6 shadow-xl shadow-black/5 sm:p-8">
        <h2 className="font-serif text-2xl font-medium tracking-tight text-neutral-900">
          Tell us about yourself
        </h2>
        <p className="mt-1.5 text-sm text-neutral-500">
          We&apos;ll send your full report to your email.
        </p>

        <form
          onSubmit={handleStep1Next}
          noValidate
          aria-label="Contact details"
          className="mt-6 flex flex-col gap-4"
        >
          <div>
            <Label htmlFor="audit-name" className={LABEL_CLS}>
              Full Name
            </Label>
            <Input
              id="audit-name"
              autoComplete="name"
              className={`mt-1.5 ${INPUT_CLS}`}
              placeholder="Jane Smith"
              value={fields.name}
              onChange={(e) => updateField("name", e.target.value)}
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "audit-name-err" : undefined}
            />
            {errors.name && (
              <p id="audit-name-err" role="alert" className="mt-1 text-xs text-red-600">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="audit-email" className={LABEL_CLS}>
              Email Address
            </Label>
            <Input
              id="audit-email"
              type="email"
              autoComplete="email"
              className={`mt-1.5 ${INPUT_CLS}`}
              placeholder="jane@company.com"
              value={fields.email}
              onChange={(e) => updateField("email", e.target.value)}
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "audit-email-err" : undefined}
            />
            {errors.email && (
              <p id="audit-email-err" role="alert" className="mt-1 text-xs text-red-600">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="audit-phone" className={LABEL_CLS}>
              Phone Number
            </Label>
            <Input
              id="audit-phone"
              type="tel"
              autoComplete="tel"
              className={`mt-1.5 ${INPUT_CLS}`}
              placeholder="+1 (555) 000-0000"
              value={fields.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              aria-required="true"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "audit-phone-err" : undefined}
            />
            {errors.phone && (
              <p id="audit-phone-err" role="alert" className="mt-1 text-xs text-red-600">
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="audit-company" className={LABEL_CLS}>
              Company{" "}
              <span className="normal-case tracking-normal text-neutral-400">
                (optional)
              </span>
            </Label>
            <Input
              id="audit-company"
              autoComplete="organization"
              className={`mt-1.5 ${INPUT_CLS}`}
              placeholder="Acme Inc."
              value={fields.company}
              onChange={(e) => updateField("company", e.target.value)}
            />
          </div>

          <Button
            type="submit"
            className="mt-2 h-auto w-full justify-center gap-2 rounded-lg bg-neutral-900 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-black"
          >
            Continue
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </form>

        <p className="mt-5 text-center text-xs text-neutral-400">
          Your information is private and never shared or sold.
        </p>
      </div>
    </div>
  );

  // ── Step 2 ─────────────────────────────────────────────────────────────────

  const step2 = (
    <div className="mx-auto max-w-xl px-6">
      <div className="rounded-2xl border border-neutral-200/60 bg-neutral-50 p-6 shadow-xl shadow-black/5 sm:p-8">
        <h2 className="font-serif text-2xl font-medium tracking-tight text-neutral-900">
          Which website should we audit?
        </h2>
        <p className="mt-1.5 text-sm text-neutral-500">
          Enter the full URL including <code className="rounded bg-neutral-200 px-1 py-0.5 text-xs">https://</code>.
        </p>

        <form
          onSubmit={handleStep2Submit}
          noValidate
          aria-label="Website URL"
          className="mt-6 flex flex-col gap-4"
        >
          <div>
            <Label htmlFor="audit-url" className={LABEL_CLS}>
              Website URL
            </Label>
            <Input
              id="audit-url"
              type="url"
              autoComplete="url"
              className={`mt-1.5 ${INPUT_CLS}`}
              placeholder="https://yourwebsite.com"
              value={fields.url}
              onChange={(e) => updateField("url", e.target.value)}
              aria-required="true"
              aria-invalid={!!errors.url}
              aria-describedby={errors.url ? "audit-url-err" : undefined}
            />
            {errors.url && (
              <p id="audit-url-err" role="alert" className="mt-1 text-xs text-red-600">
                {errors.url}
              </p>
            )}
            <p className="mt-2 text-xs text-neutral-400">
              We run a mobile audit via Google PageSpeed Insights — the URL must be publicly accessible.
            </p>
          </div>

          <Button
            type="submit"
            className="mt-2 h-auto w-full justify-center gap-2 rounded-lg bg-neutral-900 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-black"
          >
            Analyze My Website
            <Zap className="size-4" aria-hidden="true" />
          </Button>

          <button
            type="button"
            onClick={() => setStep(1)}
            className="flex items-center justify-center gap-1.5 text-xs text-neutral-500 transition-colors hover:text-neutral-800"
          >
            <ArrowLeft className="size-3" aria-hidden="true" />
            Back
          </button>
        </form>
      </div>
    </div>
  );

  // ── Step 3: Loading ────────────────────────────────────────────────────────

  const step3 = (
    <div className="mx-auto max-w-xl px-6">
      <div className="rounded-2xl border border-neutral-200/60 bg-neutral-50 p-6 shadow-xl shadow-black/5 sm:p-10">
        <div className="flex flex-col items-center py-6 text-center">
          {/* Spinner with icon */}
          <div className="relative mb-8">
            <div className="h-16 w-16 rounded-full border-2 border-neutral-200" />
            <div
              className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-neutral-900"
              aria-hidden="true"
            />
            <Zap
              className="absolute inset-0 m-auto size-6 text-neutral-700"
              aria-hidden="true"
            />
          </div>

          <h2 className="font-serif text-2xl font-medium text-neutral-900">
            Auditing your website
          </h2>
          <p className="mt-2 text-sm text-neutral-500">
            This usually takes 15–25 seconds.
          </p>

          <p
            aria-live="polite"
            key={msgIndex}
            className="mt-6 text-sm font-medium text-neutral-700"
          >
            {LOADING_MESSAGES[msgIndex]}
          </p>

          <div className="mt-3 flex gap-1.5" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="size-1.5 animate-bounce rounded-full bg-neutral-400"
                style={{ animationDelay: `${i * 150}ms` }}
              />
            ))}
          </div>

          <p className="mt-8 rounded-lg bg-white px-4 py-2.5 text-xs text-neutral-500 border border-neutral-100">
            Analyzing:{" "}
            <span className="font-medium text-neutral-800 break-all">
              {fields.url}
            </span>
          </p>
        </div>
      </div>
    </div>
  );

  // ── Step 4: Results ────────────────────────────────────────────────────────

  const step4 = (
    <div className="mx-auto max-w-3xl px-6">
      {apiError ? (
        <div className="rounded-2xl border border-red-100 bg-red-50 p-8 text-center shadow-xl shadow-black/5">
          <AlertCircle className="mx-auto size-10 text-red-400" aria-hidden="true" />
          <h2 className="mt-4 font-serif text-2xl font-medium text-neutral-900">
            Audit could not complete
          </h2>
          <p className="mt-2 text-sm text-neutral-600">{apiError}</p>
          <button
            type="button"
            onClick={handleRetry}
            className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-900 hover:text-neutral-900"
          >
            Try a Different URL
          </button>
        </div>
      ) : result ? (
        <div className="space-y-5">
          {/* Grade + overview card */}
          <div className="rounded-2xl border border-neutral-200/60 bg-neutral-50 p-6 shadow-xl shadow-black/5 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              {/* Grade */}
              <div>
                <p className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
                  Overall Grade
                </p>
                <div className="mt-3 flex items-center gap-4">
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-xl font-serif text-3xl font-bold text-white ${gradeRingColor(result.overallGrade)}`}
                    aria-label={`Grade ${result.overallGrade}`}
                  >
                    {result.overallGrade}
                  </span>
                  <div>
                    <p className="text-xs text-neutral-500">Overall Score</p>
                    <p className={`text-3xl font-bold tabular-nums leading-none ${scoreColor(result.overallScore)}`}>
                      {result.overallScore}
                      <span className="text-base font-normal text-neutral-400">/100</span>
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-neutral-400 break-all">
                  {result.url}
                </p>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-black"
              >
                Get a Free Improvement Plan
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>

            {/* 4 score cards */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <ScoreCard label="Performance" score={result.scores.performance} />
              <ScoreCard label="SEO" score={result.scores.seo} />
              <ScoreCard label="Accessibility" score={result.scores.accessibility} />
              <ScoreCard label="Best Practices" score={result.scores.bestPractices} />
            </div>
          </div>

          <AuditResults result={result} />
        </div>
      ) : null}
    </div>
  );

  return (
    <div className="w-full">
      {/* Progress indicator */}
      <div className="mx-auto max-w-2xl px-6 pb-8">
        <StepProgress current={step} />
      </div>

      {step === 1 && step1}
      {step === 2 && step2}
      {step === 3 && step3}
      {step === 4 && step4}
    </div>
  );
}
