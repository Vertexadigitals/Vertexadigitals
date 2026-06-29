import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { OriginStory } from "@/components/sections/about/OriginStory";
import { FoundersGrid } from "@/components/sections/about/FoundersGrid";
import { Mission } from "@/components/sections/about/Mission";
import { Values } from "@/components/sections/about/Values";
import { HowWeWork } from "@/components/sections/about/HowWeWork";
import { WhyForeignClients } from "@/components/sections/about/WhyForeignClients";
import { Stats } from "@/components/sections/about/Stats";
import { Location } from "@/components/sections/about/Location";
import { AboutFAQ } from "@/components/sections/about/AboutFAQ";
import { AboutCTA } from "@/components/sections/about/AboutCTA";
import { generateSeoMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getPersonSchema } from "@/lib/schema";
import { founders } from "@/lib/about-content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generateSeoMetadata({
  title: "About Our Founder-Led Digital Agency",
  description:
    "Vertexa Digitals — four founders building a global digital agency from India for ambitious brands in the US, UK, EU, and Australia.",
  canonical: "/about",
  keywords: [
    "about vertexa digitals",
    "digital agency team",
    "global digital agency",
    "senior-led digital agency",
    "digital agency India",
    "web development team",
    "agency founders",
    "international digital agency",
  ],
});

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url, position: 1 },
    { name: "About", url: `${siteConfig.url}/about`, position: 2 },
  ]);

  const founderSchemas = founders.map((founder) =>
    getPersonSchema({
      name: founder.name,
      jobTitle: founder.role,
      description: founder.bio,
    })
  );

  return (
    <>
      <JsonLd data={[breadcrumbSchema, ...founderSchemas]} />
      <AboutHero />
      <OriginStory />
      <FoundersGrid />
      <Mission />
      <Values />
      <HowWeWork />
      <WhyForeignClients />
      <Stats />
      <Location />
      <AboutFAQ />
      <AboutCTA />
    </>
  );
}
