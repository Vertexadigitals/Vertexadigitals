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
    <section aria-labelledby="services-faq-heading" className="px-6 py-20 md:py-32">
      <div className="mx-auto max-w-3xl">
        <h2
          id="services-faq-heading"
          className="font-serif text-4xl text-black md:text-5xl"
        >
          Questions about working with us
        </h2>

        <Accordion className="mt-12">
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
    </section>
  );
}
