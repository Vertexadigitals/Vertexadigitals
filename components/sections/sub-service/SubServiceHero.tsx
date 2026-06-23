"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { fadeInUp, staggerContainer } from "@/lib/motion";

type SubServiceHeroProps = {
  eyebrow: string;
  h1: string;
  subheadline: string;
  parentName: string;
  parentSlug: string;
};

export function SubServiceHero({
  eyebrow,
  h1,
  subheadline,
  parentName,
  parentSlug,
}: SubServiceHeroProps) {
  return (
    <section
      aria-labelledby="sub-service-hero-heading"
      className="px-6 pt-12 pb-20 md:pt-16 md:pb-28"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="mx-auto max-w-4xl text-center"
      >
        <motion.p
          variants={fadeInUp}
          className="mt-6 text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          id="sub-service-hero-heading"
          variants={fadeInUp}
          className="mt-4 font-serif text-4xl text-black md:text-6xl"
        >
          {h1}
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mt-6 text-lg text-neutral-600 md:text-xl"
        >
          {subheadline}
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
            render={<Link href={`/services/${parentSlug}`} />}
            variant="outline"
            className="rounded-full border-2 border-black bg-transparent px-7 py-3.5 text-black hover:bg-black hover:text-white"
          >
            View {parentName}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
