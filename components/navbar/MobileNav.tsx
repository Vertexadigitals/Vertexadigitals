"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import { SheetClose } from "@/components/ui/sheet";
import { MobileAccordionSection } from "@/components/navbar/MobileAccordionSection";
import { MobileServicesAccordion } from "@/components/navbar/MobileServicesAccordion";
import { industries } from "@/lib/industries-content";
import { getLocationsByRegion } from "@/lib/locations-content";
import { resourcesNavLinks } from "@/lib/resources-content";

const regions: { short: "US" | "UK" | "EU" | "AU"; label: string }[] = [
  { short: "US", label: "United States" },
  { short: "UK", label: "United Kingdom" },
  { short: "EU", label: "Europe" },
  { short: "AU", label: "Australia" },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <>
      <nav aria-label="Mobile" className="flex flex-col gap-1 overflow-y-auto px-4">
        <SheetClose
          render={<Link href="/" aria-current={pathname === "/" ? "page" : undefined} />}
          className={cn(
            "rounded-lg px-2 py-3 text-base font-medium transition-colors",
            pathname === "/" ? "text-black" : "text-neutral-700"
          )}
        >
          Home
        </SheetClose>
        <SheetClose
          render={<Link href="/about" aria-current={pathname === "/about" ? "page" : undefined} />}
          className={cn(
            "rounded-lg px-2 py-3 text-base font-medium transition-colors",
            pathname === "/about" ? "text-black" : "text-neutral-700"
          )}
        >
          About
        </SheetClose>

        <MobileAccordionSection
          label="Services"
          isActive={pathname.startsWith("/services")}
        >
          <MobileServicesAccordion />
          <SheetClose
            render={<Link href="/services" />}
            className="mt-1 rounded-lg px-2 py-2 text-sm font-medium text-black"
          >
            View All Services
          </SheetClose>
        </MobileAccordionSection>

        <MobileAccordionSection
          label="Industries"
          isActive={pathname.startsWith("/industries")}
        >
          {industries.map((industry) => (
            <SheetClose
              key={industry.slug}
              render={<Link href={`/industries/${industry.slug}`} />}
              className="rounded-lg px-2 py-2 text-sm text-neutral-600 transition-colors hover:text-black"
            >
              {industry.name}
            </SheetClose>
          ))}
          <SheetClose
            render={<Link href="/industries" />}
            className="mt-1 rounded-lg px-2 py-2 text-sm font-medium text-black"
          >
            View All Industries
          </SheetClose>
        </MobileAccordionSection>

        <MobileAccordionSection
          label="Locations"
          isActive={pathname.startsWith("/locations")}
        >
          {regions.map((region) => {
            const cities = getLocationsByRegion(region.short);
            return (
              <div key={region.short} className="mt-2 first:mt-0">
                <p className="px-2 text-xs font-semibold tracking-widest text-neutral-400 uppercase">
                  {region.label}
                </p>
                {cities.map((city) => (
                  <SheetClose
                    key={city.slug}
                    render={<Link href={`/locations/${city.slug}`} />}
                    className="block rounded-lg px-2 py-2 text-sm text-neutral-600 transition-colors hover:text-black"
                  >
                    {city.city}
                  </SheetClose>
                ))}
              </div>
            );
          })}
          <SheetClose
            render={<Link href="/locations" />}
            className="mt-1 rounded-lg px-2 py-2 text-sm font-medium text-black"
          >
            View All Locations
          </SheetClose>
        </MobileAccordionSection>

        <MobileAccordionSection
          label="Resources"
          isActive={pathname.startsWith("/resources")}
        >
          {resourcesNavLinks.map((link) => (
            <SheetClose
              key={link.href}
              render={<Link href={link.href} />}
              className="rounded-lg px-2 py-2 text-sm text-neutral-600 transition-colors hover:text-black"
            >
              {link.label}
            </SheetClose>
          ))}
        </MobileAccordionSection>
      </nav>

      <div className="mt-auto p-4">
        <SheetClose
          render={<Link href={siteConfig.cta.href} />}
          className="flex w-full items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
        >
          {siteConfig.cta.label}
        </SheetClose>
      </div>
    </>
  );
}
