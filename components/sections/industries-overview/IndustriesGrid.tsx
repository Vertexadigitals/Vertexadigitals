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

export function IndustriesGrid() {
  return (
    <section
      aria-labelledby="industries-grid-heading"
      className="bg-neutral-50 px-6 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <h2 id="industries-grid-heading" className="sr-only">
          Industries We Serve
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {industries.map((industry) => {
            const Icon = iconMap[industry.icon] ?? Cloud;
            return (
              <motion.div key={industry.slug} variants={fadeInUp}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-neutral-200/60 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
                >
                  <div className="inline-flex rounded-lg bg-neutral-100 p-2.5">
                    <Icon className="size-5 text-neutral-700" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-medium text-black">
                    {industry.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-neutral-600">
                    {industry.cardDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-black transition-colors group-hover:text-neutral-700">
                    Learn more
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
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
