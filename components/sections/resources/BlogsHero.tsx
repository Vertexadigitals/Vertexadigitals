"use client";

import { motion } from "framer-motion";

import { BlogSubscribeForm } from "@/components/sections/resources/BlogSubscribeForm";
import { fadeInUp, staggerContainer } from "@/lib/motion";

type BlogsHeroProps = {
  h1: string;
  subheadline: string;
};

export function BlogsHero({ h1, subheadline }: BlogsHeroProps) {
  return (
    <section
      aria-labelledby="blogs-hero-heading"
      className="px-6 pt-12 pb-20 md:pt-16 md:pb-28"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.h1
          id="blogs-hero-heading"
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

        <motion.div variants={fadeInUp} className="mt-8 mx-auto max-w-sm">
          <BlogSubscribeForm />
        </motion.div>
      </motion.div>
    </section>
  );
}
