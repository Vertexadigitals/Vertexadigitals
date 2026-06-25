"use client";

import { motion } from "framer-motion";

import { fadeInUp, staggerContainer } from "@/lib/motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your business deeply — your goals, customers, competition, technical constraints, and what success looks like. The founders ask the hard questions other agencies skip.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We translate insights into a clear, actionable plan: scope, timeline, key milestones, success metrics, and risk areas. You see the entire roadmap before a single line of code gets written.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "The founders build, design, optimize, and iterate directly. Weekly demos, transparent project boards, and direct Slack/Loom access mean you always know exactly where things stand.",
  },
  {
    number: "04",
    title: "Growth",
    description:
      "Launch is the start, not the finish. We track every metric, identify what's working, double down on wins, and continuously optimize — turning your initial investment into long-term advantage.",
  },
];

export function HowWeWork() {
  return (
    <section
      aria-labelledby="how-we-work-heading"
      className="bg-neutral-50 px-6 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase">
          How We Work
        </p>
        <h2
          id="how-we-work-heading"
          className="mt-4 max-w-3xl font-serif text-3xl font-medium tracking-tight text-black sm:text-4xl lg:text-5xl"
        >
          A clear process. No guesswork.
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8 lg:border-t lg:border-neutral-200 lg:pt-10"
        >
          {steps.map((step) => (
            <motion.div key={step.number} variants={fadeInUp}>
              <span
                className="font-serif text-6xl text-neutral-300"
                aria-hidden="true"
              >
                {step.number}
              </span>
              <h3 className="mt-4 font-serif text-xl font-medium text-black">
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
