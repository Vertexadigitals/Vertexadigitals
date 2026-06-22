"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function IndustriesCTA() {
  return (
    <section
      aria-labelledby="industries-cta-heading"
      className="bg-black px-6 py-20 text-white md:py-32"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.h2
          id="industries-cta-heading"
          variants={fadeInUp}
          className="font-serif text-4xl text-white md:text-5xl"
        >
          Don&apos;t see your industry listed?
        </motion.h2>
        <motion.p variants={fadeInUp} className="mt-6 text-lg text-neutral-300">
          These eight reflect where we have the deepest pattern recognition,
          not a hard boundary on who we&apos;ll work with. Tell us about
          your business and what you&apos;re trying to solve, and we&apos;ll
          be upfront about whether we&apos;re a strong fit or whether
          you&apos;d be better served elsewhere.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            render={<Link href={siteConfig.cta.href} />}
            className="rounded-full bg-white px-8 py-4 text-base text-black hover:bg-neutral-200"
          >
            {siteConfig.cta.label}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
