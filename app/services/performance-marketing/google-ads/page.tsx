import { notFound } from "next/navigation";

import { SubServiceTemplate } from "@/components/sections/sub-service/SubServiceTemplate";
import { generateSeoMetadata } from "@/lib/seo";
import { getSubServiceBySlug } from "@/lib/sub-services-content";

const PARENT = "performance-marketing";
const SLUG = "google-ads";

const data = getSubServiceBySlug(PARENT, SLUG);

export const metadata = data
  ? generateSeoMetadata({
      title: data.meta.title,
      description: data.meta.description,
      canonical: `/services/${PARENT}/${SLUG}`,
      keywords: data.meta.keywords,
    })
  : {};

export default function Page() {
  if (!data) notFound();
  return <SubServiceTemplate data={data} />;
}
