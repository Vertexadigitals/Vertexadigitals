"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex flex-col items-center justify-center px-6 py-24 text-center sm:py-32 lg:py-40"
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
          className="mt-6 max-w-3xl font-serif text-4xl leading-tight font-medium tracking-tight text-black sm:text-5xl lg:text-6xl"
        >
          Your Complete Digital Growth Partner
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mt-6 max-w-2xl text-base text-neutral-600 sm:text-lg lg:text-xl"
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

        <motion.p
          variants={fadeInUp}
          className="mt-8 text-xs tracking-widest text-neutral-400 uppercase"
        >
          Serving brands across {siteConfig.areaServed.join(" · ")}
        </motion.p>
      </motion.div>
    </section>
  );
}
