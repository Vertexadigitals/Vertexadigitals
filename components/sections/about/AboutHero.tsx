"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function AboutHero() {
  return (
    <section
      aria-labelledby="about-hero-heading"
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
          About Vertexa Digitals
        </motion.p>
        <motion.h1
          id="about-hero-heading"
          variants={fadeInUp}
          className="mt-4 font-serif text-4xl text-black md:text-6xl"
        >
          Building the Agency We Wanted to Hire
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="mt-6 text-lg text-neutral-600 md:text-xl"
        >
          We&apos;re four specialists who got tired of watching good client
          work get diluted by agency overhead — so we built the agency
          we&apos;d actually want to hire ourselves.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            render={<Link href={siteConfig.cta.href} />}
            className="rounded-full bg-black px-7 py-3.5 text-white hover:bg-neutral-800"
          >
            {siteConfig.cta.label}
          </Button>
          <Button
            render={<Link href="/services" />}
            variant="outline"
            className="rounded-full border-2 border-black bg-transparent px-7 py-3.5 text-black hover:bg-black hover:text-white"
          >
            Explore Services
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
