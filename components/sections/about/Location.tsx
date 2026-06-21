import { locationParagraph } from "@/lib/about-content";

export function Location() {
  return (
    <section
      aria-labelledby="location-heading"
      className="bg-neutral-50 px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="location-heading"
          className="font-serif text-4xl text-black md:text-5xl"
        >
          Based in Udaipur, serving the world
        </h2>
        <p className="mt-8 text-base leading-relaxed text-neutral-600 md:text-lg">
          {locationParagraph}
        </p>
      </div>
    </section>
  );
}
