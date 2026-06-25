"use client";

import { motion } from "framer-motion";

import { founders } from "@/lib/about-content";
import { siteConfig } from "@/lib/site-config";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function Stats() {
  const stats = [
    { value: `${founders.length}`, label: "Founders, no account managers" },
    { value: `${siteConfig.services.length}`, label: "Core service disciplines" },
    { value: "100%", label: "Founder-led engagements" },
  ];

  return (
    <section
      aria-labelledby="stats-heading"
      className="bg-neutral-900 px-6 py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <h2 id="stats-heading" className="sr-only">
          Vertexa Digitals in numbers
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-10 sm:grid-cols-3"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="text-center"
            >
              <p className="font-serif text-5xl font-medium tracking-tight text-white sm:text-6xl">
                {stat.value}
              </p>
              <p className="mt-3 text-sm tracking-wide text-neutral-400 uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
