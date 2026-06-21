import type { LegalPageContent } from "@/lib/legal-content";

type LegalPageTemplateProps = {
  content: LegalPageContent;
};

export function LegalPageTemplate({ content }: LegalPageTemplateProps) {
  return (
    <article className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-serif text-4xl text-black md:text-5xl">
          {content.h1}
        </h1>
        <p className="mt-4 text-sm text-neutral-500">
          Last updated: {content.lastUpdated}
        </p>
        <p className="mt-8 text-base leading-relaxed text-neutral-600 md:text-lg">
          {content.intro}
        </p>

        <div className="mt-12 flex flex-col gap-10">
          {content.sections.map((section, index) => {
            const headingId = `legal-section-${index}`;
            return (
              <section key={section.heading} aria-labelledby={headingId}>
                <h2
                  id={headingId}
                  className="font-serif text-2xl text-black md:text-3xl"
                >
                  {section.heading}
                </h2>
                <div className="mt-4 flex flex-col gap-4 text-base leading-relaxed text-neutral-600">
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                  {section.list && (
                    <ul className="flex list-disc flex-col gap-2 pl-5">
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {section.closingParagraph && (
                    <p>{section.closingParagraph}</p>
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </article>
  );
}
