import { CheckCircle2 } from "lucide-react";

type BlogsTopicsProps = {
  h2: string;
  intro: string;
  items: string[];
};

export function BlogsTopics({ h2, intro, items }: BlogsTopicsProps) {
  return (
    <section
      aria-labelledby="blogs-topics-heading"
      className="bg-neutral-50 px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="blogs-topics-heading"
          className="font-serif text-4xl text-black md:text-5xl"
        >
          {h2}
        </h2>
        <p className="mt-6 text-base leading-relaxed text-neutral-600 md:text-lg">
          {intro}
        </p>
        <ul className="mt-8 flex flex-col gap-4">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2
                className="mt-0.5 size-5 shrink-0 text-black"
                aria-hidden="true"
              />
              <span className="text-sm leading-relaxed text-neutral-700 md:text-base">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
