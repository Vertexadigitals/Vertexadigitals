import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { industries } from "@/lib/industries-content";

// lucide-react no longer ships brand/logo glyphs, so every social icon
// here is inlined as a plain SVG to match the rest of the icon sizing.
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 .001-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

const linkClassName =
  "block text-sm text-neutral-600 transition-colors duration-150 hover:text-neutral-900";

const headingClassName = "text-base font-semibold text-neutral-900";

const ourServicesLinks = siteConfig.services.map((service) => ({
  label: service.name,
  href: service.href,
}));

const industriesLinks = industries.map((industry) => ({
  label: industry.name,
  href: `/industries/${industry.slug}`,
}));

const locationsLinks = [
  { label: "New York", href: "/locations/new-york" },
  { label: "Los Angeles", href: "/locations/los-angeles" },
  { label: "San Francisco", href: "/locations/san-francisco" },
  { label: "London", href: "/locations/london" },
  { label: "Berlin", href: "/locations/berlin" },
  { label: "Sydney", href: "/locations/sydney" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Locations", href: "/locations" },
  { label: "Resources", href: "/resources" },
  { label: "Blog", href: "/resources/blogs" },
  { label: "Case Studies", href: "/resources/case-studies" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: siteConfig.social.facebook.href,
    Icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: siteConfig.social.instagram.href,
    Icon: InstagramIcon,
  },
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin.href,
    Icon: LinkedinIcon,
  },
  {
    label: "X",
    href: siteConfig.social.twitter.href,
    Icon: XIcon,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white text-black">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-12 sm:px-8">
        <div className="grid grid-cols-1 gap-10 pb-16 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={siteConfig.logo.src}
                alt={siteConfig.logo.alt}
                width={56}
                height={56}
                className="h-14 w-14 object-contain"
              />
              <span className="flex flex-col leading-none">
                <span className="font-serif text-2xl font-semibold tracking-tight text-neutral-900">
                  Vertexa
                </span>
                <span className="mt-1.5 ml-px text-[11px] font-medium tracking-[0.25em] text-neutral-500 uppercase">
                  Digitals
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-neutral-600">
              Vertexa Digitals is a premium digital agency built for ambitious
              global brands. Senior-led web, mobile, SEO, and growth marketing
              — to international standards, with measurable outcomes.
            </p>

            <div className="mt-6">
              <p className="mb-2 text-xs tracking-wider text-neutral-500 uppercase">
                Get in touch
              </p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 text-sm font-medium text-neutral-900 underline-offset-4 transition-colors hover:text-black hover:underline"
              >
                <Mail className="size-4" aria-hidden="true" />
                {siteConfig.contact.email}
              </a>
            </div>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Vertexa Digitals on ${label}`}
                  className="rounded-lg bg-neutral-100 p-2.5 transition-colors hover:bg-neutral-200"
                >
                  <Icon className="h-4.5 w-4.5 text-neutral-700" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className={headingClassName}>Our Services</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {ourServicesLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClassName}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={headingClassName}>Industries</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {industriesLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClassName}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={headingClassName}>Locations</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {locationsLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClassName}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/locations"
                  className="block text-xs text-neutral-500 italic transition-colors hover:text-neutral-900"
                >
                  View all locations we serve →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={headingClassName}>Quick Links</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClassName}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 border-t border-neutral-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            {siteConfig.legal.map((item, index) => (
              <span key={item.href} className="flex items-center gap-4">
                <Link
                  href={item.href}
                  className="text-sm text-neutral-500 transition-colors hover:text-black"
                >
                  {item.label}
                </Link>
                {index < siteConfig.legal.length - 1 && (
                  <span className="text-neutral-300" aria-hidden="true">
                    |
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
