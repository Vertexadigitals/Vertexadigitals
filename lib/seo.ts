import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

type GenerateSeoMetadataParams = {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  noIndex?: boolean;
  keywords?: string[];
};

// Builds a complete Next.js Metadata object for a single page from a small
// set of inputs. The plain `title` here is intentional: the root layout sets
// a `title.template`, so Next.js appends " | Vertexa Digitals" to it
// automatically for the <title> tag. OpenGraph/Twitter titles don't follow
// that template, so they're suffixed manually below.
export function generateSeoMetadata({
  title,
  description,
  canonical,
  ogImage = "/og-default.png",
  noIndex = false,
  keywords,
}: GenerateSeoMetadataParams): Metadata {
  const url = new URL(canonical, siteConfig.url).toString();
  const imageUrl = new URL(ogImage, siteConfig.url).toString();
  const fullTitle = `${title} | ${siteConfig.name}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [{ url: imageUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
