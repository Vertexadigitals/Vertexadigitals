"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { fadeInUp, staggerContainer } from "@/lib/motion";

type IndustryCTAProps = {
  h2: string;
  subhead: string;
};

export function IndustryCTA({ h2, subhead }: IndustryCTAProps) {
  return (
    <section
      aria-labelledby="industry-cta-heading"
      className="bg-neutral-900 px-6 py-20 text-white sm:py-24 lg:py-32"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.h2
          id="industry-cta-heading"
          variants={fadeInUp}
          className="font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          {h2}
        </motion.h2>
        <motion.p variants={fadeInUp} className="mt-6 text-lg text-neutral-300">
          {subhead}
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
          <Button
            render={<Link href="/industries" />}
            variant="outline"
            className="rounded-full border-2 border-white bg-transparent px-8 py-4 text-base text-white hover:bg-white hover:text-black"
          >
            View All Industries
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
