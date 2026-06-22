"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import { SheetClose } from "@/components/ui/sheet";
import { getSubServicesByParent } from "@/lib/sub-services-content";

export function MobileServicesAccordion() {
  const [openHref, setOpenHref] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-1">
      {siteConfig.services.map((service) => {
        const parentSlug = service.href.replace("/services/", "");
        const subServices = getSubServicesByParent(parentSlug);
        const isOpen = openHref === service.href;

        return (
          <div key={service.href}>
            <div className="flex items-center justify-between rounded-lg pr-1">
              <SheetClose
                render={<Link href={service.href} />}
                className="flex-1 py-2 text-sm text-neutral-700 transition-colors hover:text-black"
              >
                {service.label}
              </SheetClose>
              <button
                type="button"
                onClick={() =>
                  setOpenHref(isOpen ? null : service.href)
                }
                aria-expanded={isOpen}
                aria-label={`Toggle ${service.label} sub-services`}
                className="rounded-md p-2 text-neutral-500 hover:text-black"
              >
                <ChevronDown
                  className={cn(
                    "size-3.5 transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                  aria-hidden="true"
                />
              </button>
            </div>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col gap-1 py-1 pl-4">
                    {subServices.map((subService) => (
                      <SheetClose
                        key={subService.slug}
                        render={
                          <Link
                            href={`/services/${subService.parentSlug}/${subService.slug}`}
                          />
                        }
                        className="rounded-lg px-2 py-2 text-sm text-neutral-600 transition-colors hover:text-black"
                      >
                        {subService.hero.eyebrow}
                      </SheetClose>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
