import { Calendar, CheckCircle2, Clock, Globe, Mail } from "lucide-react";

import { siteConfig } from "@/lib/site-config";

const trustSignals = [
  "Senior-led execution — work directly with founders, no account managers",
  "Transparent pricing — clear proposals, no hidden costs",
  "Foreign-market focused — built for US, UK, EU, AU standards",
  "Senior expertise across all six core services",
  "Measurable outcomes, not vague deliverables",
];

const cardClassName =
  "flex items-center gap-4 rounded-xl border border-neutral-200/60 bg-neutral-50/50 p-5 transition-colors hover:border-neutral-300";

const iconWrapperClassName =
  "shrink-0 rounded-lg border border-neutral-200 bg-white p-2.5";

const labelClassName = "text-xs tracking-wider text-neutral-500 uppercase";

export function ContactInfo() {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className={cardClassName}>
          <div className={iconWrapperClassName}>
            <Mail className="size-5 text-neutral-900" aria-hidden="true" />
          </div>
          <div>
            <p className={labelClassName}>Email Us</p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-sm font-medium text-neutral-900 transition-colors hover:text-black"
            >
              {siteConfig.contact.email}
            </a>
          </div>
        </div>

        <div className={cardClassName}>
          <div className={iconWrapperClassName}>
            <Clock className="size-5 text-neutral-900" aria-hidden="true" />
          </div>
          <div>
            <p className={labelClassName}>Response Time</p>
            <p className="text-sm font-medium text-neutral-900">
              Within 24-48 hours, every time
            </p>
          </div>
        </div>

        <div className={cardClassName}>
          <div className={iconWrapperClassName}>
            <Globe className="size-5 text-neutral-900" aria-hidden="true" />
          </div>
          <div>
            <p className={labelClassName}>Markets We Serve</p>
            <p className="text-sm font-medium text-neutral-900">
              {siteConfig.areaServed.join(" · ")}
            </p>
          </div>
        </div>

        <div className={cardClassName}>
          <div className={iconWrapperClassName}>
            <Calendar className="size-5 text-neutral-900" aria-hidden="true" />
          </div>
          <div>
            <p className={labelClassName}>Working Hours</p>
            <p className="text-sm font-medium text-neutral-900">
              Monday – Friday · 10:00 AM – 11:00 PM IST
            </p>
            <p className="mt-1 text-xs text-neutral-500 italic">
              Covers all major business hours across US, UK, EU, AU
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-sm font-semibold text-neutral-900">
          Why founders choose Vertexa
        </h2>
        <ul className="mt-5 flex flex-col gap-3">
          {trustSignals.map((signal) => (
            <li key={signal} className="flex items-start gap-3">
              <CheckCircle2
                className="mt-0.5 size-[18px] shrink-0 text-neutral-900"
                aria-hidden="true"
              />
              <span className="text-sm text-neutral-700">{signal}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
