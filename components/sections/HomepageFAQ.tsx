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
      className="bg-white px-6 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase">
              Frequently Asked
            </p>
            <h2
              id="faq-heading"
              className="mt-4 font-serif text-3xl font-medium tracking-tight text-black sm:text-4xl"
            >
              Questions, answered
            </h2>
          </div>

          <div className="lg:col-span-8">
            <Accordion>
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
        </div>
      </div>
    </section>
  );
}
