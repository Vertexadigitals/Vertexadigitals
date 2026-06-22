import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { ResourcesHubContent } from "@/lib/resources-content";

type ResourcesCardsProps = {
  cards: ResourcesHubContent["cards"];
};

export function ResourcesCards({ cards }: ResourcesCardsProps) {
  return (
    <section aria-labelledby="resources-cards-heading" className="px-6 py-20 md:py-32">
      <div className="mx-auto max-w-5xl">
        <h2 id="resources-cards-heading" className="sr-only">
          Resources
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="flex flex-col rounded-2xl border border-black/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-10"
            >
              <h3 className="font-serif text-2xl text-black">{card.title}</h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-neutral-600">
                {card.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-black">
                {card.linkLabel}
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
