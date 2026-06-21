import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { SubServiceRelated as SubServiceRelatedItem } from "@/lib/sub-services-content";

type SubServiceRelatedProps = {
  related?: SubServiceRelatedItem[];
  parentName: string;
  parentSlug: string;
};

export function SubServiceRelated({
  related,
  parentName,
  parentSlug,
}: SubServiceRelatedProps) {
  return (
    <section
      aria-labelledby="sub-service-related-heading"
      className="bg-neutral-50 px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="sub-service-related-heading"
          className="font-serif text-4xl text-black md:text-5xl"
        >
          Related Services
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related?.map((item) => (
            <Link
              key={`${item.parentSlug}-${item.slug}`}
              href={`/services/${item.parentSlug}/${item.slug}`}
              className="flex flex-col rounded-2xl border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
            >
              <h3 className="font-serif text-lg text-black">{item.name}</h3>
              <p className="mt-2 flex-1 text-sm text-neutral-600">
                {item.shortDescription}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-black">
                Learn more
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </span>
            </Link>
          ))}

          <Link
            href={`/services/${parentSlug}`}
            className="flex flex-col rounded-2xl border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
          >
            <h3 className="font-serif text-lg text-black">{parentName}</h3>
            <p className="mt-2 flex-1 text-sm text-neutral-600">
              See the full overview of our {parentName} service.
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-black">
              View service
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
