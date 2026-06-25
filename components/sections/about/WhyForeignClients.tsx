"use client";

import { motion } from "framer-motion";

import { whyVertexaDifferentiators } from "@/lib/about-content";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function WhyForeignClients() {
  return (
    <section
      aria-labelledby="why-foreign-clients-heading"
      className="bg-white px-6 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          id="why-foreign-clients-heading"
          className="max-w-2xl font-serif text-3xl font-medium tracking-tight text-black sm:text-4xl lg:text-5xl"
        >
          Why We Only Work With International Clients
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {whyVertexaDifferentiators.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="rounded-xl border border-neutral-200/60 bg-neutral-50 p-6 sm:p-8"
            >
              <h3 className="font-serif text-lg font-medium text-black">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
