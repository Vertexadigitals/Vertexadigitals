"use client";

import { motion } from "framer-motion";

import { founders } from "@/lib/about-content";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function FoundersGrid() {
  return (
    <section
      aria-labelledby="founders-heading"
      className="bg-white px-6 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase">
          Our Founders
        </p>
        <h2
          id="founders-heading"
          className="mt-4 font-serif text-3xl font-medium tracking-tight text-black sm:text-4xl lg:text-5xl"
        >
          Meet the founders
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {founders.map((founder) => (
            <motion.article
              key={founder.name}
              variants={fadeInUp}
              className="rounded-xl border border-neutral-200/60 bg-neutral-50 p-6 sm:p-8"
            >
              <h3 className="font-serif text-xl font-medium text-black">
                {founder.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-neutral-600">
                {founder.role}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                {founder.bio}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
