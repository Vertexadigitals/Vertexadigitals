import { siteConfig } from "@/lib/site-config";

const logoUrl = `${siteConfig.url}${siteConfig.logo.src}`;
const sameAs = [siteConfig.social.instagram.href, siteConfig.social.linkedin.href];

/** Organization schema describing Vertexa Digitals as a business entity. */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: logoUrl,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    sameAs,
    foundingDate: siteConfig.foundingDate,
    address: {
      "@type": "PostalAddress",
      addressCountry: siteConfig.address.country,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
    },
    areaServed: siteConfig.areaServed,
  };
}

/** WebSite schema, makes the site eligible for a sitelinks search box. */
export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

type ServiceSchemaParams = {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  areaServed?: readonly string[];
  hasOfferCatalog?: {
    name: string;
    items: { name: string; description?: string }[];
  };
};

/** Service schema for individual /services/* pages. */
export function getServiceSchema(params: ServiceSchemaParams) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: params.name,
    description: params.description,
    url: params.url,
    serviceType: params.serviceType,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: params.areaServed ?? siteConfig.areaServed,
    ...(params.hasOfferCatalog && {
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: params.hasOfferCatalog.name,
        itemListElement: params.hasOfferCatalog.items.map((item) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: item.name,
            description: item.description,
          },
        })),
      },
    }),
  };
}

type BreadcrumbItem = {
  name: string;
  url: string;
  position: number;
};

/** BreadcrumbList schema for page navigation trails. */
export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item) => ({
      "@type": "ListItem",
      position: item.position,
      name: item.name,
      item: item.url,
    })),
  };
}

type Faq = {
  question: string;
  answer: string;
};

/** FAQPage schema, makes FAQ sections eligible for rich snippets. */
export function getFAQSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

type ArticleSchemaParams = {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified: string;
  image: string;
  url: string;
};

/** Article schema for blog posts. */
export function getArticleSchema(params: ArticleSchemaParams) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.headline,
    description: params.description,
    image: params.image,
    url: params.url,
    datePublished: params.datePublished,
    dateModified: params.dateModified,
    author: {
      "@type": "Person",
      name: params.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
    },
  };
}

/** LocalBusiness schema for the contact page. */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: logoUrl,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    sameAs,
    address: {
      "@type": "PostalAddress",
      addressCountry: siteConfig.address.country,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.address.latitude,
      longitude: siteConfig.address.longitude,
    },
    areaServed: siteConfig.areaServed,
    priceRange: "$$$",
  };
}
