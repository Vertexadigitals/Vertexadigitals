"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="bg-neutral-900 px-6 py-16 text-white sm:py-20 lg:py-24"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.p
          variants={fadeInUp}
          className="text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase"
        >
          Ready to Start?
        </motion.p>
        <motion.h2
          id="final-cta-heading"
          variants={fadeInUp}
          className="mt-4 font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          Let&apos;s build something great together.
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="mt-6 text-lg text-neutral-300"
        >
          Tell us about your project. Whether you have a clear scope or
          you&apos;re still exploring possibilities, we&apos;ll respond within
          24 hours with thoughtful next steps. No sales pressure — just a
          conversation about what&apos;s possible.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            render={<Link href={siteConfig.cta.href} />}
            className="rounded-full bg-white px-8 py-4 text-base text-black hover:bg-neutral-200"
          >
            Start a Project
          </Button>
          <Button
            render={<a href={`mailto:${siteConfig.contact.email}`} />}
            variant="outline"
            className="rounded-full border-2 border-white bg-transparent px-8 py-4 text-base text-white hover:bg-white hover:text-black"
          >
            Email Us
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
