"use client";

import { motion } from "framer-motion";

import { founders } from "@/lib/about-content";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function FoundersGrid() {
  return (
    <section
      aria-labelledby="founders-heading"
      className="bg-neutral-50 px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="founders-heading"
          className="font-serif text-4xl text-black md:text-5xl"
        >
          Meet the team
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
              className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8"
            >
              <h3 className="font-serif text-2xl text-black">
                {founder.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-neutral-500">
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
