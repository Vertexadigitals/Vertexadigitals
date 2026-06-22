"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { fadeInUp, staggerContainer } from "@/lib/motion";

type ResourcesHeroProps = {
  h1: string;
  subheadline: string;
};

export function ResourcesHero({ h1, subheadline }: ResourcesHeroProps) {
  return (
    <section
      aria-labelledby="resources-hero-heading"
      className="px-6 pt-12 pb-20 md:pt-16 md:pb-28"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="mx-auto max-w-4xl text-center"
      >
        <motion.nav
          variants={fadeInUp}
          aria-label="Breadcrumb"
          className="flex justify-center text-sm text-neutral-500"
        >
          <ol className="flex flex-wrap items-center justify-center gap-2">
            <li>
              <Link href="/" className="hover:text-black">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-black">
              Resources
            </li>
          </ol>
        </motion.nav>

        <motion.h1
          id="resources-hero-heading"
          variants={fadeInUp}
          className="mt-6 font-serif text-4xl text-black md:text-6xl"
        >
          {h1}
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mt-6 text-lg text-neutral-600 md:text-xl"
        >
          {subheadline}
        </motion.p>
      </motion.div>
    </section>
  );
}
