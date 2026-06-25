"use client";

import { motion } from "framer-motion";

import { fadeInUp, staggerContainer } from "@/lib/motion";

type LocationHowWeWorkProps = {
  city: string;
  timezoneFriendly: string;
};

export function LocationHowWeWork({ city, timezoneFriendly }: LocationHowWeWorkProps) {
  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      description: `An async-friendly first call, scheduled at a time that works for ${city} — not just for us.`,
    },
    {
      number: "02",
      title: "Proposal Within 48 Hours",
      description:
        "A clear, scoped proposal with timeline and investment, not a vague pitch deck that takes two weeks to materialize.",
    },
    {
      number: "03",
      title: `Weekly Syncs on ${timezoneFriendly}`,
      description:
        "Once work starts, weekly syncs run at a time that fits your schedule, supplemented by async updates the rest of the week.",
    },
    {
      number: "04",
      title: "Shared Dashboard + Direct Access",
      description:
        "A shared project board and direct Slack access to the founders working on your project — no account managers relaying messages.",
    },
  ];

  return (
    <section
      aria-labelledby="location-how-we-work-heading"
      className="bg-white px-6 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase">
          How We Work
        </p>
        <h2
          id="location-how-we-work-heading"
          className="mt-4 max-w-3xl font-serif text-3xl font-medium tracking-tight text-black sm:text-4xl lg:text-5xl"
        >
          Remote collaboration with {city} teams
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8 lg:border-t lg:border-neutral-200 lg:pt-10"
        >
          {steps.map((step) => (
            <motion.div key={step.number} variants={fadeInUp}>
              <span
                className="font-serif text-6xl text-neutral-300"
                aria-hidden="true"
              >
                {step.number}
              </span>
              <h3 className="mt-4 font-serif text-xl font-medium text-black">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
