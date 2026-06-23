"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import { getSubServicesByParent } from "@/lib/sub-services-content";

type ServicesMegaMenuProps = {
  onNavigate: () => void;
};

export function ServicesMegaMenu({ onNavigate }: ServicesMegaMenuProps) {
  const services = siteConfig.services;
  const [activeHref, setActiveHref] = useState(services[0].href);
  const switchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (switchTimeoutRef.current) clearTimeout(switchTimeoutRef.current);
    };
  }, []);

  function scheduleSwitch(href: string) {
    if (switchTimeoutRef.current) clearTimeout(switchTimeoutRef.current);
    switchTimeoutRef.current = setTimeout(() => {
      setActiveHref(href);
    }, 200);
  }

  function cancelPendingSwitch() {
    if (switchTimeoutRef.current) {
      clearTimeout(switchTimeoutRef.current);
      switchTimeoutRef.current = null;
    }
  }

  const activeService =
    services.find((service) => service.href === activeHref) ?? services[0];
  const activeParentSlug = activeService.href.replace("/services/", "");
  const subServices = getSubServicesByParent(activeParentSlug);

  return (
    <div className="min-w-180">
      <div className="flex">
        <div className="min-w-60 shrink-0 rounded-xl bg-neutral-50/50 p-2">
          <ul className="flex flex-col gap-1">
            {services.map((service) => {
              const isActive = service.href === activeHref;
              return (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    role="menuitem"
                    onMouseEnter={() => scheduleSwitch(service.href)}
                    onFocus={() => scheduleSwitch(service.href)}
                    onClick={onNavigate}
                    className={cn(
                      "flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2",
                      isActive
                        ? "bg-neutral-900 text-white"
                        : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
                    )}
                  >
                    {service.label}
                    {isActive && (
                      <ChevronRight className="size-4" aria-hidden="true" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div
          onMouseEnter={cancelPendingSwitch}
          className="flex-1 border-l border-neutral-200/40 px-6"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeParentSlug}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12 }}
              className="grid grid-cols-2 gap-x-6 gap-y-4"
            >
              {subServices.map((subService) => (
                <Link
                  key={subService.slug}
                  href={`/services/${subService.parentSlug}/${subService.slug}`}
                  role="menuitem"
                  onClick={onNavigate}
                  className="block rounded-lg p-3 transition-colors hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                >
                  <p className="text-sm font-medium text-neutral-900">
                    {subService.hero.eyebrow}
                  </p>
                  <p className="mt-1 line-clamp-1 text-xs leading-relaxed text-neutral-500">
                    {subService.meta.description}
                  </p>
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
        className="group mt-4 flex items-center justify-center gap-1.5 border-t border-neutral-200/40 pt-4 text-sm font-medium text-neutral-600 transition-colors hover:text-black"
      >
        View All Services
        <ArrowRight
          className="size-3.5 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </Link>
    </div>
  );
}
