"use client";

import { motion } from "framer-motion";

import { fadeInUp, staggerContainer } from "@/lib/motion";

type CaseStudiesWhatTheyIncludeProps = {
  h2: string;
  items: { title: string; description: string }[];
};

export function CaseStudiesWhatTheyInclude({
  h2,
  items,
}: CaseStudiesWhatTheyIncludeProps) {
  return (
    <section
      aria-labelledby="case-studies-include-heading"
      className="px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="case-studies-include-heading"
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
          {items.map((item) => (
            <motion.div key={item.title} variants={fadeInUp}>
              <h3 className="font-serif text-xl text-black">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
