import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AuthorBio() {
  return (
    <div className="mx-auto my-12 max-w-3xl rounded-2xl border border-neutral-200/60 bg-neutral-50 p-8">
      <p className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
        Written by Vertexa Digitals
      </p>
      <p className="mt-3 text-sm leading-relaxed text-neutral-600">
        Vertexa Digitals is a senior-led digital agency serving ambitious
        brands across the US, UK, EU, and Australia — web development, SEO,
        performance marketing, branding, and content, handled by founders,
        not account managers. This article reflects the same thinking we
        bring to client work.
      </p>
      <Link
        href="/contact"
        className="group mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-black transition-colors hover:text-neutral-700"
      >
        Work with us
        <ArrowRight
          className="size-3.5 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </Link>
    </div>
  );
}
