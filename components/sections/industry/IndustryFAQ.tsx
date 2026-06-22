"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { IndustryFaq } from "@/lib/industries-content";

type IndustryFAQProps = {
  industryName: string;
  faqs: IndustryFaq[];
};

export function IndustryFAQ({ industryName, faqs }: IndustryFAQProps) {
  return (
    <section
      aria-labelledby="industry-faq-heading"
      className="px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="industry-faq-heading"
          className="font-serif text-4xl text-black md:text-5xl"
        >
          Frequently asked questions about working with {industryName} brands
        </h2>

        <Accordion className="mt-12">
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
    </section>
  );
}
