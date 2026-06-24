"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { ServiceFaq } from "@/lib/services-content";

type ServiceFAQProps = {
  serviceName: string;
  faqs: ServiceFaq[];
};

export function ServiceFAQ({ serviceName, faqs }: ServiceFAQProps) {
  return (
    <section aria-labelledby="service-faq-heading" className="bg-white px-6 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2
              id="service-faq-heading"
              className="font-serif text-3xl font-medium tracking-tight text-black sm:text-4xl"
            >
              Frequently asked questions about {serviceName}
            </h2>
          </div>

          <div className="lg:col-span-8">
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
      </div>
    </section>
  );
}
