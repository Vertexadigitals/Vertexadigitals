"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { LocationFaq } from "@/lib/locations-content";

type LocationFAQProps = {
  city: string;
  faqs: LocationFaq[];
};

export function LocationFAQ({ city, faqs }: LocationFAQProps) {
  return (
    <section
      aria-labelledby="location-faq-heading"
      className="bg-neutral-50 px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="location-faq-heading"
          className="font-serif text-4xl text-black md:text-5xl"
        >
          Frequently asked questions about working with {city} clients
        </h2>

        <Accordion className="mt-12">
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
    </section>
  );
}
