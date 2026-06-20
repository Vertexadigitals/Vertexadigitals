"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const servicesRef = useRef<HTMLDivElement>(null);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!servicesOpen) return;

    function onClickOutside(event: MouseEvent) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setServicesOpen(false);
    }

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [servicesOpen]);

  const isServicesActive = pathname.startsWith("/services");

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm transition-colors duration-300",
        scrolled
          ? "border-b border-neutral-200"
          : "border-b border-transparent"
      )}
    >
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-2 items-center px-6 md:grid-cols-3 lg:px-8">
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
            priority
            className="h-10 w-10"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center justify-center gap-8 md:flex"
        >
          {siteConfig.nav.map((link) => {
            if (link.label === "Services") {
              return (
                <div key={link.href} ref={servicesRef} className="relative">
                  <button
                    type="button"
                    onClick={() => setServicesOpen((value) => !value)}
                    onMouseEnter={() => setServicesOpen(true)}
                    aria-haspopup="menu"
                    aria-expanded={servicesOpen}
                    className="group relative flex items-center gap-1 py-2 text-sm font-medium text-neutral-700 transition-colors hover:text-black"
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "size-3.5 transition-transform duration-200",
                        servicesOpen && "rotate-180"
                      )}
                    />
                    <span
                      className={cn(
                        "absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-black transition-transform duration-300 ease-out group-hover:scale-x-100",
                        isServicesActive && "scale-x-100"
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        role="menu"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        onMouseLeave={() => setServicesOpen(false)}
                        className="absolute top-full left-1/2 z-50 mt-3 w-64 -translate-x-1/2 rounded-xl border border-neutral-200 bg-white p-2 shadow-lg"
                      >
                        {siteConfig.services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            role="menuitem"
                            onClick={() => setServicesOpen(false)}
                            className="block rounded-lg px-4 py-2.5 text-sm text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-black"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <NavLinkItem
                key={link.href}
                href={link.href}
                label={link.label}
                active={pathname === link.href}
              />
            );
          })}
        </nav>

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

              <nav
                aria-label="Mobile"
                className="flex flex-col gap-1 overflow-y-auto px-4"
              >
                {siteConfig.nav.map((link) => {
                  if (link.label === "Services") {
                    return (
                      <div key={link.href}>
                        <button
                          type="button"
                          onClick={() =>
                            setMobileServicesOpen((value) => !value)
                          }
                          aria-expanded={mobileServicesOpen}
                          className={cn(
                            "flex w-full items-center justify-between rounded-lg px-2 py-3 text-base font-medium transition-colors",
                            isServicesActive ? "text-black" : "text-neutral-900"
                          )}
                        >
                          {link.label}
                          <ChevronDown
                            className={cn(
                              "size-4 transition-transform duration-200",
                              mobileServicesOpen && "rotate-180"
                            )}
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              className="overflow-hidden"
                            >
                              <div className="flex flex-col gap-1 py-1 pl-4">
                                {siteConfig.services.map((service) => (
                                  <SheetClose
                                    key={service.href}
                                    render={<Link href={service.href} />}
                                    className="rounded-lg px-2 py-2 text-sm text-neutral-600 transition-colors hover:text-black"
                                  >
                                    {service.label}
                                  </SheetClose>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  const active = pathname === link.href;
                  return (
                    <SheetClose
                      key={link.href}
                      render={<Link href={link.href} aria-current={active ? "page" : undefined} />}
                      className={cn(
                        "rounded-lg px-2 py-3 text-base font-medium transition-colors",
                        active ? "text-black" : "text-neutral-700"
                      )}
                    >
                      {link.label}
                    </SheetClose>
                  );
                })}
              </nav>

              <div className="mt-auto p-4">
                <SheetClose
                  render={<Link href={siteConfig.cta.href} />}
                  className="flex w-full items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
                >
                  {siteConfig.cta.label}
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
