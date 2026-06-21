import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { SubService } from "@/lib/sub-services-content";

type ServiceSubServicesProps = {
  serviceName: string;
  subServices: SubService[];
};

export function ServiceSubServices({
  serviceName,
  subServices,
}: ServiceSubServicesProps) {
  if (subServices.length === 0) return null;

  return (
    <section
      aria-labelledby="service-sub-services-heading"
      className="bg-white px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="service-sub-services-heading"
          className="max-w-2xl font-serif text-4xl text-black md:text-5xl"
        >
          We specialize in {serviceName}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subServices.map((subService) => (
            <Link
              key={subService.slug}
              href={`/services/${subService.parentSlug}/${subService.slug}`}
              className="flex flex-col rounded-2xl border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
            >
              <h3 className="font-serif text-lg text-black">
                {subService.hero.eyebrow}
              </h3>
              <p className="mt-2 flex-1 text-sm text-neutral-600">
                {subService.meta.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-black">
                Learn more
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
