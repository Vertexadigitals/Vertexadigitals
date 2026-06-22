"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { industries } from "@/lib/industries-content";

type IndustriesDropdownProps = {
  onNavigate: () => void;
};

export function IndustriesDropdown({ onNavigate }: IndustriesDropdownProps) {
  return (
    <div className="w-80">
      <div className="grid grid-cols-2 gap-1">
        {industries.map((industry) => (
          <Link
            key={industry.slug}
            href={`/industries/${industry.slug}`}
            role="menuitem"
            onClick={onNavigate}
            className="rounded-lg px-3 py-2.5 text-sm text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-black"
          >
            {industry.name}
          </Link>
        ))}
      </div>

      <Link
        href="/industries"
        role="menuitem"
        onClick={onNavigate}
        className="mt-3 flex items-center justify-center gap-1.5 border-t border-neutral-100 pt-4 text-sm font-medium text-black"
      >
        View All Industries
        <ArrowRight className="size-3.5" aria-hidden="true" />
      </Link>
    </div>
  );
}
