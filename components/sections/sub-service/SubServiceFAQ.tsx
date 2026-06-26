"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/sections/SectionHeader";
import type { SubServiceFaq } from "@/lib/sub-services-content";

type SubServiceFAQProps = {
  serviceName: string;
  faqs: SubServiceFaq[];
};

export function SubServiceFAQ({ serviceName, faqs }: SubServiceFAQProps) {
  return (
    <section
      aria-labelledby="sub-service-faq-heading"
      className="bg-white px-6 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          headingId="sub-service-faq-heading"
          heading={`Frequently asked questions about ${serviceName}`}
        />

        <div className="mx-auto max-w-4xl">
          <Accordion>
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`sub-service-faq-${index}`}>
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
