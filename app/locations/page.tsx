import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import { LocationsHero } from "@/components/sections/locations-overview/LocationsHero";
import { LocationsGrid } from "@/components/sections/locations-overview/LocationsGrid";
import { LocationsTimezoneOverview } from "@/components/sections/locations-overview/LocationsTimezoneOverview";
import { LocationsFAQ } from "@/components/sections/locations-overview/LocationsFAQ";
import { LocationsCTA } from "@/components/sections/locations-overview/LocationsCTA";
import { generateSeoMetadata } from "@/lib/seo";
import {
  getBreadcrumbSchema,
  getFAQSchema,
  getItemListSchema,
} from "@/lib/schema";
import { locations, locationsHubFaqs } from "@/lib/locations-content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generateSeoMetadata({
  title: "Digital Agency Services by Location",
  description:
    "Remote digital agency serving brands across the US, UK, EU, and Australia — genuine timezone overlap and market understanding, city by city.",
  canonical: "/locations",
  keywords: [
    "remote digital agency",
    "digital agency US UK EU Australia",
    "remote marketing agency",
    "offshore digital agency",
    "remote SEO agency",
    "remote web development agency",
  ],
});

export default function LocationsPage() {
  const itemListSchema = getItemListSchema(
    locations.map((location) => ({
      name: location.city,
      url: `${siteConfig.url}/locations/${location.slug}`,
    }))
  );

  const faqSchema = getFAQSchema(locationsHubFaqs);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url, position: 1 },
    { name: "Locations", url: `${siteConfig.url}/locations`, position: 2 },
  ]);

  return (
    <>
      <JsonLd data={[itemListSchema, faqSchema, breadcrumbSchema]} />
      <LocationsHero />
      <LocationsGrid />
      <LocationsTimezoneOverview />
      <LocationsFAQ />
      <LocationsCTA />
    </>
  );
}
