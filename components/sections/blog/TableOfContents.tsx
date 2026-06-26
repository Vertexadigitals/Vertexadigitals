"use client";

import { useEffect, useState } from "react";

type TableOfContentsProps = {
  items: { text: string; anchor: string }[];
};

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeAnchor, setActiveAnchor] = useState<string | null>(null);

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.anchor))
      .filter((el): el is HTMLElement => el !== null);

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActiveAnchor(visible[0].target.id);
        }
      },
      { rootMargin: "-100px 0px -70% 0px" }
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [items]);

  function handleClick(anchor: string) {
    document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
  }

  const list = (
    <ul className="flex flex-col gap-2.5">
      {items.map((item) => (
        <li key={item.anchor}>
          <button
            type="button"
            onClick={() => handleClick(item.anchor)}
            className={`text-left text-sm transition-colors ${
              activeAnchor === item.anchor
                ? "font-medium text-neutral-900"
                : "text-neutral-500 hover:text-neutral-900"
            }`}
          >
            {item.text}
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Mobile: collapsible */}
      <details className="mb-8 rounded-xl border border-neutral-200/60 bg-neutral-50 p-5 lg:hidden">
        <summary className="cursor-pointer text-sm font-medium text-neutral-900">
          Table of Contents
        </summary>
        <div className="mt-4">{list}</div>
      </details>

      {/* Desktop: sticky sidebar */}
      <div className="hidden lg:sticky lg:top-32 lg:block">
        <p className="mb-4 text-xs font-semibold tracking-widest text-neutral-500 uppercase">
          On this page
        </p>
        {list}
      </div>
    </>
  );
}
