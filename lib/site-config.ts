export type NavLink = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Vertexa Digitals",
  tagline: "Your complete digital growth partner.",
  description:
    "We partner with ambitious brands to design, build, and grow digital experiences that perform.",
  url: "https://vertexadigitals.com",
  logo: {
    src: "/logo.png",
    alt: "Vertexa Digitals",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavLink[],
  services: [
    { label: "Web Development", href: "/services/web-development" },
    { label: "Mobile Apps", href: "/services/mobile-apps" },
    { label: "SEO", href: "/services/seo" },
    { label: "Performance Marketing", href: "/services/performance-marketing" },
    { label: "Branding & Design", href: "/services/branding-design" },
    { label: "Content & Social Media", href: "/services/content-social-media" },
  ] satisfies NavLink[],
  company: [
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavLink[],
  cta: {
    label: "Get a Quote",
    href: "/contact",
  } satisfies NavLink,
  contact: {
    email: "info@vertexadigitals.com",
    website: "vertexadigitals.com",
    websiteUrl: "https://vertexadigitals.com",
  },
  social: {
    instagram: {
      label: "@vertexadigitals",
      href: "https://instagram.com/vertexadigitals",
    },
    linkedin: {
      label: "linkedin.com/company/vertexadigitals",
      href: "https://linkedin.com/company/vertexadigitals",
    },
  },
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ] satisfies NavLink[],
} as const;
