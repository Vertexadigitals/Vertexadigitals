import { whyForeignClientsParagraphs } from "@/lib/about-content";

export function WhyForeignClients() {
  return (
    <section
      aria-labelledby="why-foreign-clients-heading"
      className="px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="why-foreign-clients-heading"
          className="font-serif text-4xl text-black md:text-5xl"
        >
          Why We Only Work With Foreign Clients
        </h2>
        <div className="mt-8 flex flex-col gap-6 text-base leading-relaxed text-neutral-600 md:text-lg">
          {whyForeignClientsParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
