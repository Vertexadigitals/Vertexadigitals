import Link from "next/link";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist or may have moved.",
  canonical: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-32 text-center lg:px-8">
      <p className="text-sm font-medium tracking-widest text-neutral-400 uppercase">
        404
      </p>
      <h1 className="mt-4 font-serif text-4xl text-black sm:text-5xl">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-base text-neutral-600">
        The page you&apos;re looking for doesn&apos;t exist or may have been
        moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
      >
        Return Home
      </Link>
    </div>
  );
}
