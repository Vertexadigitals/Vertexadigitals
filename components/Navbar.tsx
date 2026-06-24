"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DesktopNav } from "@/components/navbar/DesktopNav";
import { MobileNav } from "@/components/navbar/MobileNav";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm transition-colors duration-300",
        scrolled
          ? "border-b border-neutral-200"
          : "border-b border-transparent"
      )}
    >
      <div className="mx-auto grid h-24 max-w-7xl grid-cols-2 items-center px-6 md:grid-cols-3 lg:px-8">
        <Link
          href="/"
          aria-label={siteConfig.name}
          className="group flex w-fit items-center gap-3"
        >
          <Image
            src={siteConfig.logo.src}
            alt={siteConfig.logo.alt}
            width={56}
            height={56}
            priority
            className="h-14 w-14 object-contain transition-transform duration-200 group-hover:scale-105"
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

        <DesktopNav />

        <div className="flex items-center justify-end gap-2">
          <Button
            render={<Link href={siteConfig.cta.href} />}
            className="hidden rounded-full bg-black px-5 text-white hover:bg-neutral-800 md:inline-flex"
          >
            {siteConfig.cta.label}
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  aria-label="Open menu"
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="flex w-full flex-col sm:max-w-sm"
            >
              <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <Link
                  href="/"
                  aria-label={siteConfig.name}
                  className="flex w-fit items-center"
                >
                  <Image
                    src={siteConfig.logo.src}
                    alt={siteConfig.logo.alt}
                    width={40}
                    height={40}
                    className="h-10 w-10"
                  />
                </Link>
              </SheetHeader>

              <MobileNav />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
