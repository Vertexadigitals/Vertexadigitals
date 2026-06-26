"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { industriesHubFaqs } from "@/lib/industries-content";

export function IndustriesFAQ() {
  return (
    <section
      aria-labelledby="industries-faq-heading"
      className="bg-neutral-50 px-6 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          headingId="industries-faq-heading"
          heading="Frequently asked questions about industry specialization"
        />

        <div className="mx-auto max-w-4xl">
          <Accordion>
            {industriesHubFaqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`industries-faq-${index}`}>
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
