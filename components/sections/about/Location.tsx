import { locationParagraph } from "@/lib/about-content";

export function Location() {
  return (
    <section
      aria-labelledby="location-heading"
      className="bg-white px-6 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="location-heading"
          className="font-serif text-3xl font-medium tracking-tight text-black sm:text-4xl lg:text-5xl"
        >
          Based in Udaipur, serving the world
        </h2>
        <p className="mt-6 text-base leading-relaxed text-neutral-600 md:text-lg">
          {locationParagraph}
        </p>
      </div>
    </section>
  );
}
