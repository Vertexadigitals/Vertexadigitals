"use client";

import { motion } from "framer-motion";
import { Eye, Globe, Target, Users, type LucideIcon } from "lucide-react";

import { fadeInUp, staggerContainer } from "@/lib/motion";

type Reason = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const reasons: Reason[] = [
  {
    icon: Globe,
    title: "Global Standards",
    description:
      "We don't run on local shortcuts. Our process, code quality, design standards, and reporting are benchmarked against the best agencies in New York, London, and Sydney — because that's where our clients operate and that's the bar that matters.",
  },
  {
    icon: Users,
    title: "Senior-Led Execution",
    description:
      "Every line of code, every design decision, every strategic call is touched by a founder. We don't outsource your project to junior teams or external freelancers. The people who win your business are the same people who ship your work.",
  },
  {
    icon: Eye,
    title: "Transparent Process",
    description:
      "Clear scopes. Honest timelines. Weekly progress reports. Real-time access to project boards. You'll always know what's being built, where blockers are, and what's coming next. No surprises, no hidden agendas, no padded invoices.",
  },
  {
    icon: Target,
    title: "Performance Obsessed",
    description:
      "We measure what matters: organic rankings, conversion rates, cost per acquisition, page speed, lifetime value. Beautiful work that doesn't move metrics is decoration. We build for outcomes that show up in your dashboards.",
  },
];

export function WhyVertexa() {
  return (
    <section aria-labelledby="why-heading" className="bg-neutral-50 px-6 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase">
          Why Vertexa
        </p>
        <h2
          id="why-heading"
          className="mt-4 max-w-3xl font-serif text-3xl font-medium tracking-tight text-black sm:text-4xl lg:text-5xl"
        >
          Built on standards. Driven by results.
        </h2>
        <p className="mt-6 max-w-2xl text-base text-neutral-600 md:text-lg">
          We&apos;re a small team by design. That&apos;s not a limitation —
          it&apos;s our edge. Every founder is hands-on. Every client gets
          senior attention. Every project meets the standards we&apos;d want
          for our own brand. It&apos;s the same reason ambitious companies
          choose a senior-led digital agency over a bloated network shop —
          they want the people who pitch the work to be the people who ship
          it.
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={fadeInUp}
              className="rounded-xl border border-neutral-200/60 bg-white p-6 sm:p-8"
            >
              <div className="inline-flex rounded-lg bg-neutral-100 p-2.5">
                <reason.icon
                  className="size-5 text-neutral-700"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-4 font-serif text-xl font-medium text-black">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
