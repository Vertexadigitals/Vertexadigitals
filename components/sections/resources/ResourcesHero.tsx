type ResourcesHeroProps = {
  h1: string;
  subheadline: string;
};

export function ResourcesHero({ h1, subheadline }: ResourcesHeroProps) {
  return (
    <section
      aria-labelledby="resources-hero-heading"
      className="px-6 pt-12 pb-20 md:pt-16 md:pb-28"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h1
          id="resources-hero-heading"
          className="mt-6 font-serif text-4xl text-black md:text-6xl"
        >
          {h1}
        </h1>

        <p className="mt-6 text-lg text-neutral-600 md:text-xl">
          {subheadline}
        </p>
      </div>
    </section>
  );
}
