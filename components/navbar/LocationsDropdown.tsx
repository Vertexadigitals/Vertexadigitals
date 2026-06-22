"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { getLocationsByRegion } from "@/lib/locations-content";

type LocationsDropdownProps = {
  onNavigate: () => void;
};

const regions: { short: "US" | "UK" | "EU" | "AU"; label: string }[] = [
  { short: "US", label: "United States" },
  { short: "UK", label: "United Kingdom" },
  { short: "EU", label: "Europe" },
  { short: "AU", label: "Australia" },
];

export function LocationsDropdown({ onNavigate }: LocationsDropdownProps) {
  return (
    <div className="w-136">
      <div className="grid grid-cols-4 gap-4">
        {regions.map((region) => {
          const cities = getLocationsByRegion(region.short);
          return (
            <div key={region.short}>
              <p className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
                {region.label}
              </p>
              <ul className="mt-3 flex flex-col gap-0.5">
                {cities.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/locations/${city.slug}`}
                      role="menuitem"
                      onClick={onNavigate}
                      className="block rounded-lg px-2 py-1.5 text-sm text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-black"
                    >
                      {city.city}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <Link
        href="/locations"
        role="menuitem"
        onClick={onNavigate}
        className="mt-4 flex items-center justify-center gap-1.5 border-t border-neutral-100 pt-4 text-sm font-medium text-black"
      >
        View All Locations
        <ArrowRight className="size-3.5" aria-hidden="true" />
      </Link>
    </div>
  );
}
