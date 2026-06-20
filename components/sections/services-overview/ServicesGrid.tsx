"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Code2,
  Palette,
  PenTool,
  Search,
  Smartphone,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { servicesContent } from "@/lib/services-content";
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
      aria-labelledby="services-grid-heading"
      className="bg-neutral-50 px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="services-grid-heading"
          className="font-serif text-4xl text-black md:text-5xl"
        >
          Six services. One integrated approach.
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {siteConfig.services.map((service) => {
            const slug = service.href.replace("/services/", "");
            const content = servicesContent[slug];
            const Icon = serviceIcons[service.href] ?? Code2;

            return (
              <motion.article
                key={service.href}
                variants={fadeInUp}
                className="flex flex-col rounded-2xl border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
              >
                <Icon className="size-10 text-black" aria-hidden="true" />
                <h3 className="mt-6 font-serif text-2xl text-black">
                  {service.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {content.gridSummary}
                </p>
                <ul className="mt-4 flex flex-col gap-2">
                  {content.gridHighlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-sm text-neutral-700"
                    >
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-black"
                        aria-hidden="true"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-black underline-offset-4 hover:underline"
                >
                  Explore {service.name}
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </Link>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
