import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { LocationService } from "@/lib/locations-content";

type LocationServicesProps = {
  h2: string;
  services: LocationService[];
};

export function LocationServices({ h2, services }: LocationServicesProps) {
  return (
    <section
      aria-labelledby="location-services-heading"
      className="bg-neutral-50 px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="location-services-heading"
          className="max-w-2xl font-serif text-4xl text-black md:text-5xl"
        >
          {h2}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const href = service.relevantSubServiceSlug
              ? `/services/${service.relevantServiceSlug}/${service.relevantSubServiceSlug}`
              : `/services/${service.relevantServiceSlug}`;

            return (
              <Link
                key={service.name}
                href={href}
                className="flex flex-col rounded-2xl border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="font-serif text-lg text-black">
                  {service.name}
                </h3>
                <p className="mt-2 flex-1 text-sm text-neutral-600">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-black">
                  Learn more
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
