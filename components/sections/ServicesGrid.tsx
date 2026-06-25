"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Palette,
  PenTool,
  Search,
  Smartphone,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const serviceIcons: Record<string, LucideIcon> = {
  "/services/web-development": Code2,
  "/services/mobile-app-development": Smartphone,
  "/services/seo": Search,
  "/services/performance-marketing": TrendingUp,
  "/services/branding-design": Palette,
  "/services/content-social-media": PenTool,
};

export function ServicesGrid() {
  return (
    <section
      aria-labelledby="services-heading"
      className="bg-white px-6 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase">
          What We Do
        </p>
        <h2
          id="services-heading"
          className="mt-4 max-w-3xl font-serif text-3xl font-medium tracking-tight text-black sm:text-4xl lg:text-5xl"
        >
          Services built to scale ambitious brands globally
        </h2>
        <p className="mt-6 max-w-2xl text-base text-neutral-600 md:text-lg">
          From the foundation of a high-performing website to the strategy
          behind a million-dollar ad campaign — we cover every pillar of
          digital growth under one roof. Six core services. One integrated
          team. Zero handoffs between agencies. As an international digital
          agency, we build every engagement to the same standard, whether
          you&apos;re a startup in Austin or an enterprise in London.
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {siteConfig.services.map((service) => {
            const Icon = serviceIcons[service.href] ?? Code2;
            return (
              <motion.article
                key={service.href}
                variants={fadeInUp}
                className="flex flex-col rounded-2xl border border-neutral-200/60 bg-neutral-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
              >
                <div className="inline-flex rounded-lg bg-neutral-100 p-2.5">
                  <Icon className="size-5 text-neutral-700" aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-serif text-xl font-medium text-black">
                  {service.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-black transition-colors hover:text-neutral-700"
                >
                  Learn more about {service.name}
                  <ArrowRight
                    className="size-3.5 shrink-0 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
