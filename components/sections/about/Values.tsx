"use client";

import { motion } from "framer-motion";
import {
  Award,
  BarChart3,
  Eye,
  Handshake,
  Layers,
  type LucideIcon,
} from "lucide-react";

import { values } from "@/lib/about-content";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const iconMap: Record<string, LucideIcon> = {
  Award,
  Eye,
  Layers,
  BarChart3,
  Handshake,
};

export function Values() {
  return (
    <section
      aria-labelledby="values-heading"
      className="bg-white px-6 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          id="values-heading"
          className="font-serif text-3xl font-medium tracking-tight text-black sm:text-4xl lg:text-5xl"
        >
          How we operate
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {values.map((value) => {
            const Icon = iconMap[value.icon] ?? Award;
            return (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="rounded-xl border border-neutral-200/60 bg-neutral-50 p-6 sm:p-8"
              >
                <div className="inline-flex rounded-lg bg-neutral-100 p-2.5">
                  <Icon className="size-5 text-neutral-700" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-serif text-xl font-medium text-black">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
