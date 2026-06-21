"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { contactFaqs } from "@/lib/contact-content";

export function ContactFAQ() {
  return (
    <section
      aria-labelledby="contact-faq-heading"
      className="bg-neutral-50 px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="contact-faq-heading"
          className="font-serif text-4xl text-black md:text-5xl"
        >
          Questions, answered
        </h2>
        <p className="mt-4 text-base text-neutral-600">
          The questions we get asked most often before someone fills out the
          form above.
        </p>

        <Accordion className="mt-12">
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
    </section>
  );
}
