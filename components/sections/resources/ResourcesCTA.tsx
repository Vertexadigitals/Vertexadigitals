"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function ResourcesCTA() {
  return (
    <section
      aria-labelledby="resources-cta-heading"
      className="bg-neutral-900 px-6 py-16 text-white sm:py-20 lg:py-24"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.h2
          id="resources-cta-heading"
          variants={fadeInUp}
          className="font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          Want examples before the library fills in?
        </motion.h2>
        <motion.p variants={fadeInUp} className="mt-6 text-lg text-neutral-300">
          Reach out directly and we&apos;ll walk you through relevant
          samples of our thinking and process, even the parts that
          haven&apos;t made it into a formal write-up yet.
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
