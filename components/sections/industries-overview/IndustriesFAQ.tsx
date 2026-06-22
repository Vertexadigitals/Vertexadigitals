"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { industriesHubFaqs } from "@/lib/industries-content";

export function IndustriesFAQ() {
  return (
    <section
      aria-labelledby="industries-faq-heading"
      className="px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="industries-faq-heading"
          className="font-serif text-4xl text-black md:text-5xl"
        >
          Frequently asked questions about industry specialization
        </h2>

        <Accordion className="mt-12">
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
    </section>
  );
}
