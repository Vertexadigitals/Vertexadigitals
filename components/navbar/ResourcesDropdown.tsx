"use client";

import Link from "next/link";

import { resourcesNavLinks } from "@/lib/resources-content";

type ResourcesDropdownProps = {
  onNavigate: () => void;
};

export function ResourcesDropdown({ onNavigate }: ResourcesDropdownProps) {
  return (
    <div className="min-w-60">
      <ul className="flex flex-col gap-1">
        {resourcesNavLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              role="menuitem"
              onClick={onNavigate}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
