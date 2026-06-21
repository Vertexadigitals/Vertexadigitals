import { Mail, Clock, CalendarClock } from "lucide-react";

import { siteConfig } from "@/lib/site-config";

export function ContactMethods() {
  return (
    <section
      aria-labelledby="contact-methods-heading"
      className="bg-neutral-50 px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="contact-methods-heading"
          className="font-serif text-4xl text-black md:text-5xl"
        >
          Direct Contact Methods
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <Mail className="size-7 text-black" aria-hidden="true" />
            <h3 className="mt-4 font-serif text-xl text-black">Email</h3>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="mt-2 block text-sm text-black hover:underline"
            >
              {siteConfig.contact.email}
            </a>
            <p className="mt-2 text-sm text-neutral-600">
              Email is the fastest way to reach us directly — we check it
              throughout the day on weekdays, and most inquiries get a
              personal reply, not an automated one, within a few hours.
            </p>
          </div>
          <div>
            <Clock className="size-7 text-black" aria-hidden="true" />
            <h3 className="mt-4 font-serif text-xl text-black">
              Response Time
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              We respond within 24 hours on any weekday, and usually much
              sooner. If you don&apos;t hear from us by the next business
              day, assume something went wrong with the form and email us
              directly instead — it happens occasionally, and we&apos;d
              rather you follow up than assume we ignored you.
            </p>
          </div>
          <div>
            <CalendarClock className="size-7 text-black" aria-hidden="true" />
            <h3 className="mt-4 font-serif text-xl text-black">
              Book a Call
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              If you&apos;d rather talk before writing anything down, mention
              that in your message and we&apos;ll send a scheduling link for
              a free 30-minute call — no pitch deck, just a conversation
              about whether we&apos;re a fit for what you&apos;re trying to
              do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
