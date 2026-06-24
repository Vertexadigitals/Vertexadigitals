import Link from "next/link";

import { getIndustryBySlug } from "@/lib/industries-content";

type LocationIndustriesProps = {
  h2: string;
  industries: string[];
};

export function LocationIndustries({ h2, industries }: LocationIndustriesProps) {
  return (
    <section
      aria-labelledby="location-industries-heading"
      className="bg-neutral-50 px-6 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          id="location-industries-heading"
          className="font-serif text-3xl font-medium tracking-tight text-black sm:text-4xl lg:text-5xl"
        >
          {h2}
        </h2>

        <div className="mt-10 flex flex-wrap gap-4">
          {industries.map((slug) => {
            const industry = getIndustryBySlug(slug);
            if (!industry) return null;

            return (
              <Link
                key={slug}
                href={`/industries/${industry.slug}`}
                className="rounded-full border border-neutral-200/60 bg-white px-5 py-3 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                {industry.name}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
