import { notFound } from "next/navigation";

import { LocationTemplate } from "@/components/sections/location/LocationTemplate";
import { generateSeoMetadata } from "@/lib/seo";
import { getLocationBySlug } from "@/lib/locations-content";

const SLUG = "chicago";

const data = getLocationBySlug(SLUG);

export const metadata = data
  ? generateSeoMetadata({
      title: data.meta.title,
      description: data.meta.description,
      canonical: `/locations/${SLUG}`,
      keywords: data.meta.keywords,
    })
  : {};

export default function Page() {
  if (!data) notFound();
  return <LocationTemplate data={data} />;
}
