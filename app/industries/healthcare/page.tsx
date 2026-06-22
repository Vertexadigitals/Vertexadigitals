import { notFound } from "next/navigation";

import { IndustryTemplate } from "@/components/sections/industry/IndustryTemplate";
import { generateSeoMetadata } from "@/lib/seo";
import { getIndustryBySlug } from "@/lib/industries-content";

const SLUG = "healthcare";

const data = getIndustryBySlug(SLUG);

export const metadata = data
  ? generateSeoMetadata({
      title: data.meta.title,
      description: data.meta.description,
      canonical: `/industries/${SLUG}`,
      keywords: data.meta.keywords,
    })
  : {};

export default function Page() {
  if (!data) notFound();
  return <IndustryTemplate data={data} />;
}
