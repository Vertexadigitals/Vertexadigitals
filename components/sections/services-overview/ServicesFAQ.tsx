"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { servicesOverviewFaqs } from "@/lib/services-content";

export function ServicesFAQ() {
  return (
    <section aria-labelledby="services-faq-heading" className="bg-neutral-50 px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          headingId="services-faq-heading"
          heading="Questions about working with us"
        />

        <div className="mx-auto max-w-4xl">
          <Accordion>
            {servicesOverviewFaqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`services-faq-${index}`}>
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
