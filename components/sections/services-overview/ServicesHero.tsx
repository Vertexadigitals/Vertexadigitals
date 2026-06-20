"use client";

import { motion } from "framer-motion";

import { fadeInUp, staggerContainer } from "@/lib/motion";

export function ServicesHero() {
  return (
    <section
      aria-labelledby="services-hero-heading"
      className="px-6 pt-12 pb-20 text-center md:pt-16 md:pb-28"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="mx-auto max-w-3xl"
      >
        <motion.p
          variants={fadeInUp}
          className="text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase"
        >
          Our Services
        </motion.p>
        <motion.h1
          id="services-hero-heading"
          variants={fadeInUp}
          className="mt-4 font-serif text-4xl text-black md:text-6xl"
        >
          Digital Services Built for Global Growth
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="mt-6 text-lg text-neutral-600 md:text-xl"
        >
          Six core disciplines. One integrated team. Every capability your
          brand needs to compete on the global stage — from the foundation of
          a high-performing website to the strategy behind a million-dollar
          paid acquisition campaign. We don&apos;t outsource pieces to four
          different vendors — the same integrated team plans, builds, and
          optimizes across every discipline, so nothing gets lost in
          translation between strategy and execution.
        </motion.p>
      </motion.div>
    </section>
  );
}
