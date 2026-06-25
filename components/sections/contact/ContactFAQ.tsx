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
      className="bg-neutral-50 px-6 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2
              id="contact-faq-heading"
              className="font-serif text-3xl font-medium tracking-tight text-black sm:text-4xl"
            >
              Questions, answered
            </h2>
            <p className="mt-4 text-base text-neutral-600">
              The questions we get asked most often before someone fills out
              the form above.
            </p>
          </div>

          <div className="lg:col-span-8">
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
      </div>
    </section>
  );
}
