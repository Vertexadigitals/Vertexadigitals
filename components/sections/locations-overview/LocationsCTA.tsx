"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function LocationsCTA() {
  return (
    <section
      aria-labelledby="locations-cta-heading"
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
          id="locations-cta-heading"
          variants={fadeInUp}
          className="font-serif text-4xl text-white md:text-5xl"
        >
          Don&apos;t see your city listed?
        </motion.h2>
        <motion.p variants={fadeInUp} className="mt-6 text-lg text-neutral-300">
          These thirteen cities reflect where we&apos;ve built the most
          consistent client experience, not a hard boundary. We work with
          clients across the US, UK, EU, and Australia more broadly — tell
          us where you&apos;re based.
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
