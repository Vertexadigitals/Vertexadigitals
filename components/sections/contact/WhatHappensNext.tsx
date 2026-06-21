"use client";

import { motion } from "framer-motion";

import { whatHappensNextSteps } from "@/lib/contact-content";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function WhatHappensNext() {
  return (
    <section
      aria-labelledby="what-happens-next-heading"
      className="px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="what-happens-next-heading"
          className="font-serif text-4xl text-black md:text-5xl"
        >
          What Happens Next
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8 lg:border-t lg:border-neutral-200 lg:pt-10"
        >
          {whatHappensNextSteps.map((step, index) => (
            <motion.div key={step.title} variants={fadeInUp}>
              <span className="font-serif text-6xl text-neutral-300">
                {String(index + 1).padStart(2, "0")}
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
