"use client";

import Link from "next/link";

import { resourcesNavLinks } from "@/lib/resources-content";

type ResourcesDropdownProps = {
  onNavigate: () => void;
};

export function ResourcesDropdown({ onNavigate }: ResourcesDropdownProps) {
  return (
    <div className="w-48">
      <ul className="flex flex-col gap-0.5">
        {resourcesNavLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              role="menuitem"
              onClick={onNavigate}
              className="block rounded-lg px-3 py-2.5 text-sm text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-black"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
