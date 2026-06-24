import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { getLocationsByRegion } from "@/lib/locations-content";

const regions: { short: "US" | "UK" | "EU" | "AU"; label: string }[] = [
  { short: "US", label: "United States" },
  { short: "UK", label: "United Kingdom" },
  { short: "EU", label: "European Union" },
  { short: "AU", label: "Australia" },
];

export function LocationsGrid() {
  return (
    <section
      aria-labelledby="locations-grid-heading"
      className="px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="locations-grid-heading" className="sr-only">
          Locations We Serve
        </h2>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {regions.map((region) => {
            const cities = getLocationsByRegion(region.short);

            return (
              <div key={region.short}>
                <h3 className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
                  {region.label}
                </h3>
                <ul className="mt-5 flex flex-col gap-3">
                  {cities.map((city) => (
                    <li key={city.slug}>
                      <Link
                        href={`/locations/${city.slug}`}
                        className="group inline-flex items-center gap-1.5 text-base text-black transition-colors hover:text-neutral-700"
                      >
                        Serving {city.city}
                        <ArrowRight
                          className="size-3.5 transition-transform group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
