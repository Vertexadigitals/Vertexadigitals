import { ContactForm } from "@/components/sections/contact/ContactForm";

export function ContactFormSection() {
  return (
    <section aria-labelledby="contact-form-heading" className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <h2
          id="contact-form-heading"
          className="font-serif text-3xl text-black md:text-4xl"
        >
          Tell us about your project
        </h2>
        <p className="mt-4 text-base text-neutral-600">
          The more context you give us, the faster we can come back with a
          useful answer instead of a round of clarifying questions. Every
          field below feeds directly into how we prepare for our first
          conversation, so a few extra minutes here usually saves a back-and-forth
          email thread later.
        </p>
        <div className="mt-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
