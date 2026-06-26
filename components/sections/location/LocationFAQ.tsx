"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/sections/SectionHeader";
import type { LocationFaq } from "@/lib/locations-content";

type LocationFAQProps = {
  city: string;
  faqs: LocationFaq[];
};

export function LocationFAQ({ city, faqs }: LocationFAQProps) {
  return (
    <section
      aria-labelledby="location-faq-heading"
      className="bg-white px-6 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          headingId="location-faq-heading"
          heading={`Frequently asked questions about working with ${city} clients`}
        />

        <div className="mx-auto max-w-4xl">
          <Accordion>
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`location-faq-${index}`}>
                <AccordionTrigger className="font-serif text-base text-black md:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm leading-relaxed text-neutral-600 md:text-base">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
