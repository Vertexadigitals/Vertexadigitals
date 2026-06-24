"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Cloud,
  GraduationCap,
  HeartPulse,
  Home,
  Landmark,
  Scale,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";

import { fadeInUp, staggerContainer } from "@/lib/motion";
import { industries } from "@/lib/industries-content";

const iconMap: Record<string, LucideIcon> = {
  Cloud,
  ShoppingCart,
  HeartPulse,
  Landmark,
  Building2,
  Home,
  Scale,
  GraduationCap,
};

export function WhoWeServe() {
  return (
    <section
      aria-labelledby="who-we-serve-heading"
      className="bg-neutral-50 px-6 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase">
          Our Clients
        </p>
        <h2
          id="who-we-serve-heading"
          className="mt-4 max-w-3xl font-serif text-3xl font-medium tracking-tight text-black sm:text-4xl lg:text-5xl"
        >
          Built for ambitious global brands
        </h2>
        <p className="mt-6 max-w-2xl text-base text-neutral-600 md:text-lg">
          We&apos;re particular about who we work with — because that&apos;s
          how we deliver work we&apos;re proud of. Here are the industries
          where we&apos;ve built genuine pattern recognition.
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {industries.map((industry) => {
            const Icon = iconMap[industry.icon] ?? Cloud;
            return (
              <motion.div key={industry.slug} variants={fadeInUp}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-neutral-200/60 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="inline-flex rounded-lg bg-neutral-100 p-2.5">
                    <Icon className="size-5 text-neutral-700" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-serif text-base font-medium text-black">
                    {industry.name}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-neutral-600 transition-colors group-hover:text-black">
                    Learn more
                    <ArrowRight
                      className="size-3 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
