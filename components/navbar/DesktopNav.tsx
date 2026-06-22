"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { NavMenuItem } from "@/components/navbar/NavMenuItem";
import { ServicesMegaMenu } from "@/components/navbar/ServicesMegaMenu";
import { IndustriesDropdown } from "@/components/navbar/IndustriesDropdown";
import { LocationsDropdown } from "@/components/navbar/LocationsDropdown";
import { ResourcesDropdown } from "@/components/navbar/ResourcesDropdown";

function NavLinkItem({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className="group relative py-2 text-sm font-medium text-neutral-700 transition-colors hover:text-black"
    >
      {label}
      <span
        className={cn(
          "absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-black transition-transform duration-300 ease-out group-hover:scale-x-100",
          active && "scale-x-100"
        )}
      />
    </Link>
  );
}

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="hidden items-center justify-center gap-8 md:flex"
    >
      <NavLinkItem href="/" label="Home" active={pathname === "/"} />
      <NavLinkItem href="/about" label="About" active={pathname === "/about"} />

      <NavMenuItem
        label="Services"
        isActive={pathname.startsWith("/services")}
        panelClassName="left-1/2 -translate-x-1/2"
      >
        {(close) => <ServicesMegaMenu onNavigate={close} />}
      </NavMenuItem>

      <NavMenuItem
        label="Industries"
        isActive={pathname.startsWith("/industries")}
        panelClassName="left-1/2 -translate-x-1/2"
      >
        {(close) => <IndustriesDropdown onNavigate={close} />}
      </NavMenuItem>

      <NavMenuItem
        label="Locations"
        isActive={pathname.startsWith("/locations")}
        panelClassName="left-1/2 -translate-x-1/2"
      >
        {(close) => <LocationsDropdown onNavigate={close} />}
      </NavMenuItem>

      <NavMenuItem
        label="Resources"
        isActive={pathname.startsWith("/resources")}
        panelClassName="right-0"
      >
        {(close) => <ResourcesDropdown onNavigate={close} />}
      </NavMenuItem>
    </nav>
  );
}
