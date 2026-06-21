"use client";

import { motion } from "framer-motion";

import { fadeInUp, staggerContainer } from "@/lib/motion";

export function ContactHero() {
  return (
    <section
      aria-labelledby="contact-hero-heading"
      className="px-6 pt-12 pb-16 text-center md:pt-16 md:pb-20"
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
          Get In Touch
        </motion.p>
        <motion.h1
          id="contact-hero-heading"
          variants={fadeInUp}
          className="mt-4 font-serif text-4xl text-black md:text-6xl"
        >
          Let&apos;s Build Something Together
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="mt-6 text-lg text-neutral-600 md:text-xl"
        >
          Tell us about your project — web development, mobile apps, SEO,
          paid ads, branding, or content. We respond within 24 hours, every
          weekday. No account managers in between, no automated drip
          sequence — just a real reply from someone who&apos;ll actually
          work on what you&apos;re describing.
        </motion.p>
      </motion.div>
    </section>
  );
}
