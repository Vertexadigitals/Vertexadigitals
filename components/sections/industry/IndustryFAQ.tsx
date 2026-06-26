"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/sections/SectionHeader";
import type { IndustryFaq } from "@/lib/industries-content";

type IndustryFAQProps = {
  industryName: string;
  faqs: IndustryFaq[];
};

export function IndustryFAQ({ industryName, faqs }: IndustryFAQProps) {
  return (
    <section
      aria-labelledby="industry-faq-heading"
      className="bg-neutral-50 px-6 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          headingId="industry-faq-heading"
          heading={`Frequently asked questions about working with ${industryName} brands`}
        />

        <div className="mx-auto max-w-4xl">
          <Accordion>
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`industry-faq-${index}`}>
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
