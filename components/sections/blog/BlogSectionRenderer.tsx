import {
  AlertTriangle,
  CheckCircle2,
  Info,
  Sparkles,
} from "lucide-react";

import type { BlogSection } from "@/lib/blogs-content";

const calloutStyles = {
  info: {
    wrapper: "border border-neutral-200 bg-neutral-50",
    icon: Info,
    iconWrapper: "bg-neutral-100 text-neutral-700",
  },
  success: {
    wrapper: "border-l-4 border-neutral-900 bg-neutral-50",
    icon: CheckCircle2,
    iconWrapper: "bg-neutral-100 text-neutral-900",
  },
  warning: {
    wrapper: "border-2 border-dashed border-neutral-900 bg-white",
    icon: AlertTriangle,
    iconWrapper: "bg-neutral-100 text-neutral-900",
  },
  premium: {
    wrapper: "bg-neutral-900 text-white",
    icon: Sparkles,
    iconWrapper: "bg-white/10 text-white",
  },
} as const;

function renderSection(section: BlogSection, index: number) {
  switch (section.type) {
    case "paragraph":
      return (
        <p key={index} className="mb-6 text-lg leading-relaxed text-neutral-700">
          {section.content}
        </p>
      );

    case "heading": {
      const id = section.id;
      if (section.level === 2) {
        return (
          <h2
            key={index}
            id={id}
            className="mt-12 mb-6 font-serif text-3xl font-medium tracking-tight text-black"
          >
            {section.text}
          </h2>
        );
      }
      return (
        <h3
          key={index}
          id={id}
          className="mt-10 mb-4 font-serif text-2xl font-medium tracking-tight text-black"
        >
          {section.text}
        </h3>
      );
    }

    case "list":
      return section.style === "numbered" ? (
        <ol key={index} className="my-6 list-decimal space-y-2 pl-6 text-lg leading-relaxed text-neutral-700">
          {section.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      ) : (
        <ul key={index} className="my-6 list-disc space-y-2 pl-6 text-lg leading-relaxed text-neutral-700">
          {section.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );

    case "quote":
      return (
        <blockquote
          key={index}
          className="my-8 border-l-4 border-neutral-900 py-4 pl-6 text-xl leading-relaxed text-neutral-800 italic"
        >
          <p>&ldquo;{section.text}&rdquo;</p>
          {section.attribution && (
            <footer className="mt-3 text-sm font-medium text-neutral-500 not-italic">
              — {section.attribution}
            </footer>
          )}
        </blockquote>
      );

    case "callout": {
      const style = calloutStyles[section.variant];
      const Icon = style.icon;
      return (
        <div key={index} className={`my-8 rounded-xl p-6 ${style.wrapper}`}>
          <div className="flex items-start gap-4">
            <div className={`inline-flex shrink-0 rounded-lg p-2 ${style.iconWrapper}`}>
              <Icon className="size-5" aria-hidden="true" />
            </div>
            <div>
              <p className="font-serif text-lg font-medium">
                {section.heading}
              </p>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  section.variant === "premium" ? "text-neutral-300" : "text-neutral-600"
                }`}
              >
                {section.content}
              </p>
            </div>
          </div>
        </div>
      );
    }

    case "checklist":
      return (
        <div key={index} className="my-8">
          {section.heading && (
            <p className="mb-4 font-serif text-xl font-medium text-black">
              {section.heading}
            </p>
          )}
          <ul className="space-y-3">
            {section.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 size-5 shrink-0 text-neutral-900"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-base font-medium text-neutral-900">{item.text}</p>
                  {item.description && (
                    <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                      {item.description}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      );

    case "comparison":
      return (
        <div key={index} className="my-8">
          {section.heading && (
            <p className="mb-4 font-serif text-xl font-medium text-black">
              {section.heading}
            </p>
          )}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {section.columns.map((column, i) => (
              <div
                key={i}
                className="rounded-xl border border-neutral-200/60 bg-neutral-50 p-6"
              >
                <p className="font-serif text-lg font-medium text-black">
                  {column.title}
                </p>
                <ul className="mt-4 space-y-2">
                  {column.points.map((point, j) => (
                    <li
                      key={j}
                      className="text-sm leading-relaxed text-neutral-600"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      );

    case "statBlock":
      return (
        <div key={index} className="my-12">
          {section.heading && (
            <p className="mb-6 font-serif text-xl font-medium text-black">
              {section.heading}
            </p>
          )}
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {section.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="font-serif text-4xl font-medium tracking-tight text-black">
                  {stat.number}
                </p>
                <p className="mt-1 text-xs font-medium tracking-wide text-neutral-500 uppercase">
                  {stat.label}
                </p>
                {stat.description && (
                  <p className="mt-2 text-xs leading-relaxed text-neutral-500">
                    {stat.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      );

    case "divider":
      return (
        <hr key={index} className="my-12 border-t border-neutral-200" />
      );

    case "tableOfContents":
      // Rendered separately as a sidebar/collapsible by BlogTemplate, not inline.
      return null;

    default:
      return null;
  }
}

type BlogSectionRendererProps = {
  sections: BlogSection[];
};

export function BlogSectionRenderer({ sections }: BlogSectionRendererProps) {
  return <>{sections.map((section, index) => renderSection(section, index))}</>;
}
