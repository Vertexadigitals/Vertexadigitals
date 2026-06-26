"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { locationsHubFaqs } from "@/lib/locations-content";

export function LocationsFAQ() {
  return (
    <section
      aria-labelledby="locations-faq-heading"
      className="bg-neutral-50 px-6 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          headingId="locations-faq-heading"
          heading="Frequently asked questions about our remote model"
        />

        <div className="mx-auto max-w-4xl">
          <Accordion>
            {locationsHubFaqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`locations-faq-${index}`}>
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
