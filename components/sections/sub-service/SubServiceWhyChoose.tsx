"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import { fadeInUp, staggerContainer } from "@/lib/motion";
import type { SubServiceWhyChoosePoint } from "@/lib/sub-services-content";

type SubServiceWhyChooseProps = {
  h2: string;
  points: SubServiceWhyChoosePoint[];
};

export function SubServiceWhyChoose({ h2, points }: SubServiceWhyChooseProps) {
  return (
    <section
      aria-labelledby="sub-service-why-choose-heading"
      className="bg-white px-6 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          id="sub-service-why-choose-heading"
          className="max-w-2xl font-serif text-3xl font-medium tracking-tight text-black sm:text-4xl lg:text-5xl"
        >
          {h2}
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {points.map((point) => (
            <motion.div
              key={point.title}
              variants={fadeInUp}
              className="rounded-xl border border-neutral-200/60 bg-neutral-50 p-6 sm:p-8"
            >
              <div className="inline-flex rounded-lg bg-neutral-100 p-2.5">
                <CheckCircle2
                  className="size-5 text-neutral-700"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-4 font-serif text-xl font-medium text-black">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {point.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
