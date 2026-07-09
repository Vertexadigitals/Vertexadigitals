import type { Metadata } from "next";
import { Zap } from "lucide-react";

import { generateSeoMetadata } from "@/lib/seo";
import { AuditTool } from "@/components/sections/audit/AuditTool";

export const metadata: Metadata = generateSeoMetadata({
  title: "Free Website Audit — Instant Performance Report",
  description:
    "Get a free website audit powered by Google PageSpeed Insights. Discover performance issues, SEO gaps, and accessibility problems in under 2 minutes.",
  canonical: "/audit",
  keywords: [
    "free website audit",
    "website performance audit",
    "page speed test",
    "SEO audit tool",
    "core web vitals check",
    "website health check",
  ],
});

const FEATURES = [
  "Performance",
  "SEO",
  "Accessibility",
  "Best Practices",
  "Core Web Vitals",
];

export default function AuditPage() {
  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="audit-hero-heading"
        className="bg-neutral-900 px-6 py-14 sm:py-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-neutral-700 px-3 py-1 text-xs font-medium tracking-wider text-neutral-400 uppercase">
            <Zap className="size-3" aria-hidden="true" />
            Powered by Google PageSpeed Insights
          </div>

          <h1
            id="audit-hero-heading"
            className="mt-5 font-serif text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl"
          >
            Free Website Performance Audit
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            Get a personalised report in under 2 minutes. Discover what&apos;s
            slowing your site and where you&apos;re losing organic traffic — for
            free.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {FEATURES.map((feat) => (
              <span
                key={feat}
                className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-400"
              >
                {feat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-step form */}
      <section className="bg-white pb-24 pt-12">
        <AuditTool />
      </section>
    </>
  );
}
