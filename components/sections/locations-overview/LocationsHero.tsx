"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function LocationsHero() {
  return (
    <section
      aria-labelledby="locations-hero-heading"
      className="px-6 pt-12 pb-20 md:pt-16 md:pb-28"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="mx-auto max-w-4xl text-center"
      >
        <motion.h1
          id="locations-hero-heading"
          variants={fadeInUp}
          className="mt-6 font-serif text-4xl text-black md:text-6xl"
        >
          Serving Brands Across the US, UK, EU, and Australia
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mt-6 text-lg text-neutral-600 md:text-xl"
        >
          We&apos;re a remote agency based in Udaipur, India — not physically
          present in any of the cities below. What we&apos;ve built instead
          is genuine timezone overlap, market-specific understanding, and a
          working rhythm that holds up across the distance, city by city.
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
        </motion.div>
      </motion.div>
    </section>
  );
}
