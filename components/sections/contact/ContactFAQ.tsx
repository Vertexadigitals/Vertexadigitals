"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { contactFaqs } from "@/lib/contact-content";

export function ContactFAQ() {
  return (
    <section
      aria-labelledby="contact-faq-heading"
      className="bg-neutral-50 px-6 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          headingId="contact-faq-heading"
          heading="Questions, answered"
          subtext="The questions we get asked most often before someone fills out the form above."
        />

        <div className="mx-auto max-w-4xl">
          <Accordion>
            {contactFaqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`contact-faq-${index}`}>
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
