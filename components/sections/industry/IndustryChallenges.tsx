"use client";

import { motion } from "framer-motion";

import { fadeInUp, staggerContainer } from "@/lib/motion";
import type { IndustryChallenge } from "@/lib/industries-content";

type IndustryChallengesProps = {
  h2: string;
  challenges: IndustryChallenge[];
};

export function IndustryChallenges({ h2, challenges }: IndustryChallengesProps) {
  return (
    <section
      aria-labelledby="industry-challenges-heading"
      className="bg-white px-6 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          id="industry-challenges-heading"
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
          {challenges.map((challenge) => (
            <motion.div
              key={challenge.title}
              variants={fadeInUp}
              className="rounded-xl border border-neutral-200/60 bg-neutral-50 p-6"
            >
              <h3 className="font-serif text-lg font-medium text-black">
                {challenge.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {challenge.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
