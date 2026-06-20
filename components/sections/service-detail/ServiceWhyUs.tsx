"use client";

import { motion } from "framer-motion";

import { fadeInUp, staggerContainer } from "@/lib/motion";
import type { ServiceWhyUsPoint } from "@/lib/services-content";

type ServiceWhyUsProps = {
  serviceName: string;
  points: ServiceWhyUsPoint[];
};

export function ServiceWhyUs({ serviceName, points }: ServiceWhyUsProps) {
  return (
    <section
      aria-labelledby="service-why-us-heading"
      className="bg-neutral-50 px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="service-why-us-heading"
          className="max-w-2xl font-serif text-4xl text-black md:text-5xl"
        >
          Why brands choose us for {serviceName}
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
              <h3 className="font-serif text-xl text-black">{point.title}</h3>
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
