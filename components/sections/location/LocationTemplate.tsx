import { JsonLd } from "@/components/JsonLd";
import { LocationHero } from "@/components/sections/location/LocationHero";
import { LocationWhyThisCity } from "@/components/sections/location/LocationWhyThisCity";
import { LocationServices } from "@/components/sections/location/LocationServices";
import { LocationTimezone } from "@/components/sections/location/LocationTimezone";
import { LocationWhyRemote } from "@/components/sections/location/LocationWhyRemote";
import { LocationIndustries } from "@/components/sections/location/LocationIndustries";
import { LocationHowWeWork } from "@/components/sections/location/LocationHowWeWork";
import { LocationTrustSignals } from "@/components/sections/location/LocationTrustSignals";
import { LocationFAQ } from "@/components/sections/location/LocationFAQ";
import { LocationCTA } from "@/components/sections/location/LocationCTA";
import { getBreadcrumbSchema, getFAQSchema, getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import type { Location } from "@/lib/locations-content";

type LocationTemplateProps = {
  data: Location;
};

export function LocationTemplate({ data }: LocationTemplateProps) {
  const locationUrl = `${siteConfig.url}/locations/${data.slug}`;

  const serviceSchema = getServiceSchema({
    name: `Digital Agency Services for ${data.city}`,
    description: data.meta.description,
    url: locationUrl,
    serviceType: "Digital Marketing Agency",
    areaServed: [data.city],
  });

  const faqSchema = getFAQSchema(data.faqs);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url, position: 1 },
    { name: "Locations", url: `${siteConfig.url}/locations`, position: 2 },
    { name: data.city, url: locationUrl, position: 3 },
  ]);

  return (
    <>
      <JsonLd data={[serviceSchema, faqSchema, breadcrumbSchema]} />
      <LocationHero
        eyebrow={data.hero.eyebrow}
        h1={data.hero.h1}
        subheadline={data.hero.subheadline}
      />
      <LocationWhyThisCity
        h2={data.whyThisCity.h2}
        paragraphs={data.whyThisCity.paragraphs}
      />
      <LocationServices
        h2={data.servicesForCity.h2}
        services={data.servicesForCity.services}
      />
      <LocationTimezone
        h2={data.timezoneAndCommunication.h2}
        paragraphs={data.timezoneAndCommunication.paragraphs}
        overlapHours={data.timezoneAndCommunication.overlapHours}
        communicationTools={data.timezoneAndCommunication.communicationTools}
      />
      <LocationWhyRemote
        h2={data.whyRemoteWorks.h2}
        points={data.whyRemoteWorks.points}
      />
      <LocationIndustries
        h2={data.industriesInCity.h2}
        industries={data.industriesInCity.industries}
      />
      <LocationHowWeWork city={data.city} timezoneFriendly={data.timezoneFriendly} />
      <LocationTrustSignals city={data.city} regionShort={data.regionShort} />
      <LocationFAQ city={data.city} faqs={data.faqs} />
      <LocationCTA h2={data.cta.h2} subhead={data.cta.subhead} />
    </>
  );
}
