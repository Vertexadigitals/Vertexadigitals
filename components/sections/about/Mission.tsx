import { missionParagraphs } from "@/lib/about-content";

export function Mission() {
  return (
    <section aria-labelledby="mission-heading" className="px-6 py-20 md:py-32">
      <div className="mx-auto max-w-3xl">
        <h2
          id="mission-heading"
          className="font-serif text-4xl text-black md:text-5xl"
        >
          What we&apos;re building toward
        </h2>
        <div className="mt-8 flex flex-col gap-6 text-base leading-relaxed text-neutral-600 md:text-lg">
          {missionParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
