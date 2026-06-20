"use client";

import { motion } from "framer-motion";

import { fadeInUp, staggerContainer } from "@/lib/motion";

type Step = {
  number: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your business deeply — your goals, customers, competition, technical constraints, and what success looks like. We ask the hard questions other agencies skip and document everything that matters.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We translate insights into a clear, actionable plan: scope, timeline, key milestones, success metrics, and risk areas. You see the entire roadmap before we touch a single line of code or design.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "Our team builds, designs, optimizes, and iterates with founder-level attention. Weekly demos, transparent project boards, and direct Slack/Loom access mean you always know exactly where things stand.",
  },
  {
    number: "04",
    title: "Growth",
    description:
      "Launch is the start, not the finish. We track every metric, identify what's working, double down on wins, and continuously optimize — turning your initial investment into long-term competitive advantage.",
  },
];

export function Process() {
  return (
    <section aria-labelledby="process-heading" className="bg-neutral-50 px-6 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase">
          How We Work
        </p>
        <h2
          id="process-heading"
          className="mt-4 max-w-3xl font-serif text-4xl text-black md:text-5xl"
        >
          A clear process. No guesswork.
        </h2>
        <p className="mt-6 max-w-2xl text-base text-neutral-600 md:text-lg">
          Great work doesn&apos;t happen by accident. We follow a tested
          four-stage process that turns ambitious goals into shipped results
          — built around clarity, collaboration, and measurable outcomes.
          It&apos;s the same operating rhythm we use for every client, from
          a single landing page to a multi-market growth program.
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8 lg:border-t lg:border-neutral-200 lg:pt-10"
        >
          {steps.map((step) => (
            <motion.div key={step.number} variants={fadeInUp}>
              <span className="font-serif text-6xl text-neutral-300">
                {step.number}
              </span>
              <h3 className="mt-4 font-serif text-xl text-black">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
