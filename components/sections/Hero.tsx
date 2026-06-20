"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex flex-col items-center justify-center px-6 py-24 text-center md:min-h-[90vh] md:py-0"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="flex flex-col items-center"
      >
        <motion.p
          variants={fadeInUp}
          className="text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase"
        >
          Digital Agency · Built for Global Brands
        </motion.p>

        <motion.h1
          id="hero-heading"
          variants={fadeInUp}
          className="mt-6 max-w-4xl font-serif text-5xl leading-tight font-bold text-black md:text-7xl lg:text-8xl"
        >
          Your Complete Digital Growth Partner
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mt-6 max-w-3xl text-xl text-neutral-600 md:text-2xl"
        >
          We design, build, and scale digital experiences for ambitious
          brands across the United States, United Kingdom, European Union,
          and Australia. From web development to performance marketing —
          one team, one vision, every capability you need.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button
            render={<Link href={siteConfig.cta.href} />}
            className="rounded-full bg-black px-8 py-4 text-base text-white hover:bg-neutral-800"
          >
            {siteConfig.cta.label}
          </Button>
          <Button
            render={<Link href="/services" />}
            variant="outline"
            className="rounded-full border-2 border-black bg-transparent px-8 py-4 text-base text-black hover:bg-black hover:text-white"
          >
            Explore Services
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-400"
      >
        <ChevronDown className="size-6" />
      </motion.div>
    </section>
  );
}
