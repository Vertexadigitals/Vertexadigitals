"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { getSubServicesByParent } from "@/lib/sub-services-content";

type ServicesMegaMenuProps = {
  onNavigate: () => void;
};

export function ServicesMegaMenu({ onNavigate }: ServicesMegaMenuProps) {
  const services = siteConfig.services;
  const [activeHref, setActiveHref] = useState(services[0].href);

  const activeService =
    services.find((service) => service.href === activeHref) ?? services[0];
  const activeParentSlug = activeService.href.replace("/services/", "");
  const subServices = getSubServicesByParent(activeParentSlug);

  return (
    <div className="w-160">
      <div className="flex">
        <div className="w-56 shrink-0 border-r border-neutral-100 pr-4">
          <ul className="flex flex-col gap-0.5">
            {services.map((service) => {
              const isActive = service.href === activeHref;
              return (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    role="menuitem"
                    onMouseEnter={() => setActiveHref(service.href)}
                    onFocus={() => setActiveHref(service.href)}
                    onClick={onNavigate}
                    className={
                      "block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors " +
                      (isActive
                        ? "bg-neutral-50 text-black"
                        : "text-neutral-700 hover:bg-neutral-50 hover:text-black")
                    }
                  >
                    {service.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex-1 pl-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeParentSlug}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12 }}
              className="grid grid-cols-2 gap-1"
            >
              {subServices.map((subService) => (
                <Link
                  key={subService.slug}
                  href={`/services/${subService.parentSlug}/${subService.slug}`}
                  role="menuitem"
                  onClick={onNavigate}
                  className="rounded-lg px-3 py-2 text-sm text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-black"
                >
                  {subService.hero.eyebrow}
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <Link
        href="/services"
        role="menuitem"
        onClick={onNavigate}
        className="mt-4 flex items-center justify-center gap-1.5 border-t border-neutral-100 pt-4 text-sm font-medium text-black"
      >
        View All Services
        <ArrowRight className="size-3.5" aria-hidden="true" />
      </Link>
    </div>
  );
}
