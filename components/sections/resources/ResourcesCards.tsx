import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { ResourcesHubContent } from "@/lib/resources-content";

type ResourcesCardsProps = {
  cards: ResourcesHubContent["cards"];
};

export function ResourcesCards({ cards }: ResourcesCardsProps) {
  return (
    <section aria-labelledby="resources-cards-heading" className="bg-neutral-50 px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 id="resources-cards-heading" className="sr-only">
          Resources
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group flex flex-col rounded-xl border border-neutral-200/60 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-10"
            >
              <h3 className="font-serif text-xl font-medium text-black">{card.title}</h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-neutral-600">
                {card.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-black transition-colors group-hover:text-neutral-700">
                {card.linkLabel}
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
