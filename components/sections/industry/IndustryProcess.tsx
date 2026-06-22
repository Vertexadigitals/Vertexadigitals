"use client";

import { motion } from "framer-motion";

import { fadeInUp, staggerContainer } from "@/lib/motion";
import type { IndustryProcessStep } from "@/lib/industries-content";

type IndustryProcessProps = {
  h2: string;
  steps: IndustryProcessStep[];
};

export function IndustryProcess({ h2, steps }: IndustryProcessProps) {
  return (
    <section
      aria-labelledby="industry-process-heading"
      className="bg-neutral-50 px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="industry-process-heading"
          className="font-serif text-4xl text-black md:text-5xl"
        >
          {h2}
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
