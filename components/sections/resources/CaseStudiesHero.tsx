"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { fadeInUp, staggerContainer } from "@/lib/motion";

type CaseStudiesHeroProps = {
  h1: string;
  subheadline: string;
};

export function CaseStudiesHero({ h1, subheadline }: CaseStudiesHeroProps) {
  return (
    <section
      aria-labelledby="case-studies-hero-heading"
      className="px-6 pt-12 pb-20 md:pt-16 md:pb-28"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="mx-auto max-w-3xl text-center"
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
            <li>
              <Link href="/resources" className="hover:text-black">
                Resources
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-black">
              Case Studies
            </li>
          </ol>
        </motion.nav>

        <motion.h1
          id="case-studies-hero-heading"
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

        <motion.div variants={fadeInUp} className="mt-8 flex justify-center">
          <Button
            render={<Link href={`mailto:${siteConfig.contact.email}`} />}
            className="rounded-full bg-black px-7 py-3.5 text-white hover:bg-neutral-800"
          >
            <Mail className="size-4" aria-hidden="true" />
            Email Us for Samples
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
