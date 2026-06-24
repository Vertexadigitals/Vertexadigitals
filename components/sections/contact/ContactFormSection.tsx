import { ContactInfo } from "@/components/sections/contact/ContactInfo";
import { ContactForm } from "@/components/sections/contact/ContactForm";

export function ContactFormSection() {
  return (
    <section
      aria-label="Contact information and form"
      className="bg-white px-6 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-neutral-200/60 bg-neutral-50 p-6 shadow-xl shadow-black/5 sm:p-10">
              <h2 className="text-center font-serif text-2xl font-medium tracking-tight text-neutral-900 sm:text-3xl">
                Tell us about your project
              </h2>
              <p className="mt-2 mb-8 text-center text-sm text-neutral-500">
                We&apos;ll respond within 24-48 hours with next steps.
              </p>

              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
