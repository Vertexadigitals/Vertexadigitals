"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import { fadeInUp, staggerContainer } from "@/lib/motion";
import type { SubServiceOffering } from "@/lib/sub-services-content";

type SubServiceOfferingsProps = {
  h2: string;
  items: SubServiceOffering[];
};

export function SubServiceOfferings({ h2, items }: SubServiceOfferingsProps) {
  return (
    <section
      aria-labelledby="sub-service-offerings-heading"
      className="bg-white px-6 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          id="sub-service-offerings-heading"
          className="max-w-2xl font-serif text-3xl font-medium tracking-tight text-black sm:text-4xl lg:text-5xl"
        >
          {h2}
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeInUp}
              className="rounded-xl border border-neutral-200/60 bg-neutral-50 p-6"
            >
              <CheckCircle2
                className="size-5 text-neutral-700"
                aria-hidden="true"
              />
              <h3 className="mt-4 font-serif text-lg font-medium text-black">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {item.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
