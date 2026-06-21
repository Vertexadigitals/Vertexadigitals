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
      className="bg-neutral-50 px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="sub-service-why-choose-heading"
          className="max-w-2xl font-serif text-4xl text-black md:text-5xl"
        >
          {h2}
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:gap-12"
        >
          {points.map((point) => (
            <motion.div key={point.title} variants={fadeInUp}>
              <CheckCircle2 className="size-7 text-black" aria-hidden="true" />
              <h3 className="mt-4 font-serif text-xl text-black">
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
