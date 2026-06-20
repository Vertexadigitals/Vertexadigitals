"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { fadeInUp, staggerContainer } from "@/lib/motion";

type ServiceDetailHeroProps = {
  serviceName: string;
  h1: string;
  subheadline: string;
};

export function ServiceDetailHero({
  serviceName,
  h1,
  subheadline,
}: ServiceDetailHeroProps) {
  return (
    <section
      aria-labelledby="service-hero-heading"
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
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-black">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/services" className="hover:text-black">
                Services
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-black">
              {serviceName}
            </li>
          </ol>
        </motion.nav>

        <motion.p
          variants={fadeInUp}
          className="mt-6 text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase"
        >
          {serviceName}
        </motion.p>

        <motion.h1
          id="service-hero-heading"
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
            render={<Link href="/work" />}
            variant="outline"
            className="rounded-full border-2 border-black bg-transparent px-7 py-3.5 text-black hover:bg-black hover:text-white"
          >
            See Our Work
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
