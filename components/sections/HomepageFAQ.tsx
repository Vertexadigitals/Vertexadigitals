"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { homepageFaqs } from "@/lib/faq-data";

export function HomepageFAQ() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="bg-white px-6 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          headingId="faq-heading"
          eyebrow="Frequently Asked"
          heading="Frequently asked questions"
        />

        <div className="mx-auto max-w-4xl">
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
    </section>
  );
}
