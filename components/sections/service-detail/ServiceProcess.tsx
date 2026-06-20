"use client";

import { motion } from "framer-motion";

import { fadeInUp, staggerContainer } from "@/lib/motion";
import type { ServiceProcessStep } from "@/lib/services-content";

type ServiceProcessProps = {
  steps: ServiceProcessStep[];
};

export function ServiceProcess({ steps }: ServiceProcessProps) {
  return (
    <section aria-labelledby="service-process-heading" className="px-6 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2
          id="service-process-heading"
          className="font-serif text-4xl text-black md:text-5xl"
        >
          How we deliver
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8 lg:border-t lg:border-neutral-200 lg:pt-10"
        >
          {steps.map((step) => (
            <motion.div key={step.step} variants={fadeInUp}>
              <span className="font-serif text-6xl text-neutral-300">
                {step.step}
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
