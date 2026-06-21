import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { subServices } from "@/lib/sub-services-content";

type ChangeFrequency = NonNullable<
  MetadataRoute.Sitemap[number]["changeFrequency"]
>;

type Entry = {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
};

// Service and legal paths are derived from site-config.ts (the single
// source of truth also used by the Navbar/Footer) rather than hardcoded
// here a second time, so the sitemap can't drift out of sync with the
// site's actual routes.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: Entry[] = [
    { path: "/", changeFrequency: "weekly", priority: 1.0 },
    { path: "/about", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services", changeFrequency: "monthly", priority: 0.9 },
    { path: "/work", changeFrequency: "weekly", priority: 0.7 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  ];

  const serviceEntries: Entry[] = siteConfig.services.map((service) => ({
    path: service.href,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const subServiceEntries: Entry[] = subServices.map((subService) => ({
    path: `/services/${subService.parentSlug}/${subService.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const legalEntries: Entry[] = siteConfig.legal.map((item) => ({
    path: item.href,
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  return [
    ...staticEntries,
    ...serviceEntries,
    ...subServiceEntries,
    ...legalEntries,
  ].map(
    (entry) => ({
      url: `${siteConfig.url}${entry.path}`,
      lastModified,
      changeFrequency: entry.changeFrequency,
      priority: entry.priority,
    })
  );
}
