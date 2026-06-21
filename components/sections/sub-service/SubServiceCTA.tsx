"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { fadeInUp, staggerContainer } from "@/lib/motion";

type SubServiceCTAProps = {
  h2: string;
  subhead: string;
};

export function SubServiceCTA({ h2, subhead }: SubServiceCTAProps) {
  return (
    <section
      aria-labelledby="sub-service-cta-heading"
      className="bg-black px-6 py-20 text-white md:py-32"
    >
      <motion.div
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.h2
          id="sub-service-cta-heading"
          variants={fadeInUp}
          className="font-serif text-4xl text-white md:text-5xl"
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
            render={<Link href="/work" />}
            variant="outline"
            className="rounded-full border-2 border-white bg-transparent px-8 py-4 text-base text-white hover:bg-white hover:text-black"
          >
            See Our Work
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
