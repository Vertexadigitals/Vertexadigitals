"use client";

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
      className="bg-neutral-50 px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="sub-service-offerings-heading"
          className="max-w-2xl font-serif text-4xl text-black md:text-5xl"
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
              className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8"
            >
              <h3 className="font-serif text-xl text-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {item.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
