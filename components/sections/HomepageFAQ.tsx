"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { homepageFaqs } from "@/lib/faq-data";

export function HomepageFAQ() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="bg-neutral-50 px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase">
          Frequently Asked
        </p>
        <h2
          id="faq-heading"
          className="mt-4 font-serif text-4xl text-black md:text-5xl"
        >
          Questions, answered
        </h2>

        <Accordion className="mt-12">
          {homepageFaqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`faq-${index}`}>
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
