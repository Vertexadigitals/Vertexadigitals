import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import { Hero } from "@/components/sections/Hero";
import { Introduction } from "@/components/sections/Introduction";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyVertexa } from "@/components/sections/WhyVertexa";
import { Process } from "@/components/sections/Process";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { HomepageFAQ } from "@/components/sections/HomepageFAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { generateSeoMetadata } from "@/lib/seo";
import {
  getBreadcrumbSchema,
  getFAQSchema,
  getItemListSchema,
} from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import { homepageFaqs } from "@/lib/faq-data";

// `title` is omitted from the final object (not set to `undefined` — Next.js
// treats an explicit `undefined` as "render no <title> tag", not "inherit
// from parent"). Omitting the key entirely makes "/" inherit the root
// layout's `title.default`, which is this exact same branded string.
// eslint-disable-next-line @typescript-eslint/no-unused-vars -- destructured only to omit it below
const { title: _homeTitle, ...homeMetadata } = generateSeoMetadata({
  title: "Vertexa Digitals | Your Complete Digital Growth Partner",
  description:
    "Premium digital agency for ambitious global brands: web development, mobile apps, SEO, performance marketing, branding & content. US, UK, EU, Australia.",
  canonical: "/",
  keywords: [
    "digital agency",
    "web development agency",
    "SEO agency",
    "mobile app development",
    "performance marketing",
    "branding agency",
    "global digital agency",
    "international digital agency",
    "digital growth partner",
  ],
});

export const metadata: Metadata = homeMetadata;

export default function Home() {
  const itemListSchema = getItemListSchema(
    siteConfig.services.map((service) => ({
      name: service.name,
      url: `${siteConfig.url}${service.href}`,
    }))
  );

  const faqSchema = getFAQSchema(homepageFaqs);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url, position: 1 },
  ]);

  return (
    <>
      <JsonLd data={[itemListSchema, faqSchema, breadcrumbSchema]} />
      <Hero />
      <Introduction />
      <ServicesGrid />
      <WhyVertexa />
      <Process />
      <WhoWeServe />
      <HomepageFAQ />
      <FinalCTA />
    </>
  );
}
