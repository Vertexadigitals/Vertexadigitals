"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { industries } from "@/lib/industries-content";

type IndustriesDropdownProps = {
  onNavigate: () => void;
};

export function IndustriesDropdown({ onNavigate }: IndustriesDropdownProps) {
  return (
    <div className="min-w-120">
      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
        {industries.map((industry) => (
          <Link
            key={industry.slug}
            href={`/industries/${industry.slug}`}
            role="menuitem"
            onClick={onNavigate}
            className="rounded-lg p-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
          >
            {industry.name}
          </Link>
        ))}
      </div>

      <Link
        href="/industries"
        role="menuitem"
        onClick={onNavigate}
        className="group mt-4 flex items-center justify-center gap-1.5 border-t border-neutral-200/40 pt-4 text-sm font-medium text-neutral-600 transition-colors hover:text-black"
      >
        View All Industries
        <ArrowRight
          className="size-3.5 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </Link>
    </div>
  );
}
