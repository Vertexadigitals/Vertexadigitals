export function ContactHero() {
  return (
    <section
      aria-labelledby="contact-hero-heading"
      className="px-6 pt-12 md:pt-16"
    >
      <div className="mx-auto max-w-7xl sm:px-2">
        <p className="text-xs tracking-widest text-neutral-500 uppercase">
          Contact
        </p>
        <h1
          id="contact-hero-heading"
          className="mt-3 font-serif text-4xl leading-tight font-medium tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl"
        >
          Let&apos;s build something exceptional.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
          Tell us about your project — what you&apos;re building, where
          you&apos;re stuck, or what outcomes matter most. We respond within
          24-48 hours with a clear path forward.
        </p>
      </div>
    </section>
  );
}
