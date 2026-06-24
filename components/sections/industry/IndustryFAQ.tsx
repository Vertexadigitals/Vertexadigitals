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
      className="bg-neutral-50 px-6 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2
              id="industry-faq-heading"
              className="font-serif text-3xl font-medium tracking-tight text-black sm:text-4xl"
            >
              Frequently asked questions about working with {industryName} brands
            </h2>
          </div>

          <div className="lg:col-span-8">
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
      </div>
    </section>
  );
}
