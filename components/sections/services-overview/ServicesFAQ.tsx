"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { servicesOverviewFaqs } from "@/lib/services-content";

export function ServicesFAQ() {
  return (
    <section aria-labelledby="services-faq-heading" className="bg-neutral-50 px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2
              id="services-faq-heading"
              className="font-serif text-3xl font-medium tracking-tight text-black sm:text-4xl"
            >
              Questions about working with us
            </h2>
          </div>

          <div className="lg:col-span-8">
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
      </div>
    </section>
  );
}
