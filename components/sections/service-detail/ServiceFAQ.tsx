"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/sections/SectionHeader";
import type { ServiceFaq } from "@/lib/services-content";

type ServiceFAQProps = {
  serviceName: string;
  faqs: ServiceFaq[];
};

export function ServiceFAQ({ serviceName, faqs }: ServiceFAQProps) {
  return (
    <section aria-labelledby="service-faq-heading" className="bg-white px-6 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          headingId="service-faq-heading"
          heading={`Frequently asked questions about ${serviceName}`}
        />

        <div className="mx-auto max-w-4xl">
          <Accordion>
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`service-faq-${index}`}>
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
