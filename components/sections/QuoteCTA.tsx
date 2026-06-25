"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { CheckCircle2, Globe, Mail } from "lucide-react";

import { siteConfig } from "@/lib/site-config";

// react-hook-form, zod, and the Select primitive are only needed once this
// form actually renders. QuoteCTA sits in the root layout, so without
// splitting this out, every page on the site (except the excluded ones)
// would ship that whole dependency chain in its initial JS bundle.
const QuoteCTAForm = dynamic(() => import("./QuoteCTAForm"), {
  loading: () => (
    <div className="flex flex-col gap-5" aria-hidden="true">
      <div className="grid grid-cols-2 gap-4">
        <div className="h-17 animate-pulse rounded-lg bg-neutral-200/60" />
        <div className="h-17 animate-pulse rounded-lg bg-neutral-200/60" />
      </div>
      <div className="h-17 animate-pulse rounded-lg bg-neutral-200/60" />
      <div className="h-17 animate-pulse rounded-lg bg-neutral-200/60" />
      <div className="h-17 animate-pulse rounded-lg bg-neutral-200/60" />
      <div className="h-32 animate-pulse rounded-lg bg-neutral-200/60" />
      <div className="h-14 animate-pulse rounded-lg bg-neutral-300/60" />
    </div>
  ),
});

const EXCLUDED_PATHS = ["/contact", "/privacy", "/terms"];

const whatYouGet = [
  "Senior-led project execution",
  "Transparent 24–48 hour response",
  "Detailed proposal with timeline & investment",
  "Clear scope, milestones, and deliverables",
  "Direct access to founders — no account managers",
];

export function QuoteCTA() {
  const pathname = usePathname();

  if (EXCLUDED_PATHS.includes(pathname)) {
    return null;
  }

  return (
    <section
      aria-labelledby="quote-cta-heading"
      className="bg-neutral-50/30 px-6 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-medium tracking-widest text-neutral-500 uppercase">
            Get a Quote
          </p>
          <h2
            id="quote-cta-heading"
            className="mt-4 font-serif text-4xl leading-tight font-medium tracking-tight text-neutral-900 sm:text-5xl"
          >
            Get Your Free Quote
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-neutral-600 sm:text-lg">
            Tell us about your project — we&apos;ll get back within 24-48
            hours with a tailored proposal, timeline, and clear next steps.
            No hidden fees, no obligations. Just a straight answer on what
            we&apos;d build and what it would take.
          </p>

          <div className="mt-10 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-neutral-100 p-3">
                <Mail className="size-6 text-neutral-900" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs tracking-wider text-neutral-500 uppercase">
                  Email Us
                </p>
                <p className="text-base font-medium text-neutral-900">
                  {siteConfig.contact.email}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-neutral-100 p-3">
                <Globe className="size-6 text-neutral-900" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs tracking-wider text-neutral-500 uppercase">
                  Our Reach
                </p>
                <p className="text-sm font-medium text-neutral-900">
                  {siteConfig.areaServed.join(" · ")}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-semibold tracking-tight text-neutral-900">
              What You Get
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {whatYouGet.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    className="size-[18px] shrink-0 text-neutral-900"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-neutral-200/60 bg-neutral-50 p-6 shadow-xl shadow-black/5 sm:p-10">
          <QuoteCTAForm />
        </div>
      </div>
    </section>
  );
}
