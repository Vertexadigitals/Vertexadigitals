import { siteConfig } from "@/lib/site-config";
import { subServices } from "@/lib/sub-services-content";
import { industries } from "@/lib/industries-content";
import { locations } from "@/lib/locations-content";
import { blogPosts } from "@/lib/blogs-content";

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

type Entry = {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
};

// This is a custom Route Handler rather than the app/sitemap.ts metadata
// convention specifically so we can emit an <?xml-stylesheet?> processing
// instruction pointing at /sitemap.xsl — the metadata convention has no way
// to add one. Crawlers ignore the PI and read the <urlset> data normally;
// it only affects how the XML renders when a human opens it in a browser.
function buildEntries(): Entry[] {
  const staticEntries: Entry[] = [
    { path: "/", changeFrequency: "weekly", priority: 1.0 },
    { path: "/about", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services", changeFrequency: "monthly", priority: 0.9 },
    { path: "/industries", changeFrequency: "monthly", priority: 0.8 },
    { path: "/locations", changeFrequency: "monthly", priority: 0.7 },
    { path: "/resources", changeFrequency: "monthly", priority: 0.5 },
    { path: "/resources/blogs", changeFrequency: "monthly", priority: 0.5 },
    {
      path: "/resources/case-studies",
      changeFrequency: "monthly",
      priority: 0.5,
    },
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

  const industryEntries: Entry[] = industries.map((industry) => ({
    path: `/industries/${industry.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const locationEntries: Entry[] = locations.map((location) => ({
    path: `/locations/${location.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const legalEntries: Entry[] = siteConfig.legal.map((item) => ({
    path: item.href,
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  const blogEntries: Entry[] = blogPosts.map((post) => ({
    path: `/resources/blogs/${post.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticEntries,
    ...serviceEntries,
    ...subServiceEntries,
    ...industryEntries,
    ...locationEntries,
    ...legalEntries,
    ...blogEntries,
  ];
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const lastModified = new Date().toISOString();
  const entries = buildEntries();

  const urls = entries
    .map(
      (entry) => `  <url>
    <loc>${escapeXml(`${siteConfig.url}${entry.path}`)}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>
  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=UTF-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
