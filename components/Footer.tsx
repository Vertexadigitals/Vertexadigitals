import Link from "next/link";
import Image from "next/image";
import { Globe, Mail } from "lucide-react";

import { siteConfig } from "@/lib/site-config";

// lucide-react no longer ships brand/logo glyphs, so Instagram and LinkedIn
// are inlined here as plain SVGs to match the rest of the icon sizing.
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

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white text-black">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              aria-label={siteConfig.name}
              className="flex w-fit items-center"
            >
              <Image
                src={siteConfig.logo.src}
                alt={siteConfig.logo.alt}
                width={50}
                height={50}
                className="h-[50px] w-[50px]"
              />
            </Link>
            <p className="font-serif text-lg text-black">
              {siteConfig.tagline}
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-neutral-600">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
              Services
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {siteConfig.services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-neutral-700 transition-colors hover:text-black"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
              Company
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {siteConfig.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-700 transition-colors hover:text-black"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
              Connect
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 text-sm text-neutral-700 transition-colors hover:text-black"
                >
                  <Mail className="size-4" aria-hidden="true" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-neutral-700 transition-colors hover:text-black"
                >
                  <Globe className="size-4" aria-hidden="true" />
                  {siteConfig.contact.website}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.instagram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-neutral-700 transition-colors hover:text-black"
                >
                  <InstagramIcon className="size-4" />
                  {siteConfig.social.instagram.label}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-neutral-700 transition-colors hover:text-black"
                >
                  <LinkedinIcon className="size-4" />
                  {siteConfig.social.linkedin.label}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start gap-4 border-t border-neutral-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
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
