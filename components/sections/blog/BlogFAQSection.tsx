import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/sections/SectionHeader";

type BlogFAQSectionProps = {
  faqs: { question: string; answer: string }[];
};

export function BlogFAQSection({ faqs }: BlogFAQSectionProps) {
  if (faqs.length === 0) return null;

  return (
    <section
      aria-labelledby="blog-faq-heading"
      className="bg-white px-6 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          headingId="blog-faq-heading"
          heading="Frequently Asked Questions"
        />

        <div className="mx-auto max-w-4xl">
          <Accordion>
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`blog-faq-${index}`}>
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
