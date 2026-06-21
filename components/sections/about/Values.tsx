"use client";

import { motion } from "framer-motion";

import { values } from "@/lib/about-content";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function Values() {
  return (
    <section
      aria-labelledby="values-heading"
      className="bg-neutral-50 px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="values-heading"
          className="font-serif text-4xl text-black md:text-5xl"
        >
          How we operate
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:gap-12"
        >
          {values.map((value) => (
            <motion.div key={value.title} variants={fadeInUp}>
              <h3 className="font-serif text-xl text-black">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
