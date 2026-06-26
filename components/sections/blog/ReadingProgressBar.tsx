"use client";

import { useEffect, useState } from "react";

export function ReadingProgressBar({ articleId }: { articleId: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const article = document.getElementById(articleId);
      if (!article) return;

      const rect = article.getBoundingClientRect();
      const articleHeight = rect.height;
      const viewportHeight = window.innerHeight;
      const scrolledPastTop = -rect.top;

      const scrollable = articleHeight - viewportHeight;
      const percent =
        scrollable > 0
          ? Math.min(100, Math.max(0, (scrolledPastTop / scrollable) * 100))
          : 0;

      setProgress(percent);
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [articleId]);

  return (
    <div
      className="sticky top-24 z-40 h-0.5 w-full bg-neutral-100"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    >
      <div
        className="h-full bg-neutral-900 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
