"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

type NavMenuItemProps = {
  label: string;
  isActive: boolean;
  panelClassName?: string;
  children: (close: () => void) => React.ReactNode;
};

// Generic desktop dropdown trigger + panel used by Services, Industries,
// Locations, and Resources. Handles open state, outside-click, Escape, and
// basic Arrow Up/Down cycling between menuitems inside the panel — the
// specific panel content (cascading mega menu vs. flat grid) is supplied
// by the caller via the render-prop `children`.
export function NavMenuItem({
  label,
  isActive,
  panelClassName,
  children,
}: NavMenuItemProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  function close() {
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    function onClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function onTriggerKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(true);
      requestAnimationFrame(() => {
        const firstItem = containerRef.current?.querySelector<HTMLElement>(
          '[role="menuitem"]'
        );
        firstItem?.focus();
      });
    }
  }

  function onPanelKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    const items = Array.from(
      containerRef.current?.querySelectorAll<HTMLElement>(
        '[role="menuitem"]'
      ) ?? []
    );
    const currentIndex = items.indexOf(document.activeElement as HTMLElement);

    if (event.key === "ArrowDown") {
      event.preventDefault();
      const next = items[currentIndex + 1] ?? items[0];
      next?.focus();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      const prev = items[currentIndex - 1] ?? items[items.length - 1];
      prev?.focus();
    }
  }

  return (
    <div ref={containerRef} className="relative" onMouseLeave={close}>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        onMouseEnter={() => setOpen(true)}
        onKeyDown={onTriggerKeyDown}
        aria-haspopup="menu"
        aria-expanded={open}
        className="group relative flex items-center gap-1 py-2 text-sm font-medium text-neutral-700 transition-colors hover:text-black"
      >
        {label}
        <ChevronDown
          className={cn(
            "size-3.5 transition-transform duration-200",
            open && "rotate-180"
          )}
          aria-hidden="true"
        />
        <span
          className={cn(
            "absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-black transition-transform duration-300 ease-out group-hover:scale-x-100",
            isActive && "scale-x-100"
          )}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            aria-label={label}
            onKeyDown={onPanelKeyDown}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className={cn(
              "absolute top-full z-50 mt-3 rounded-xl border border-neutral-200 bg-white p-4 shadow-lg",
              panelClassName
            )}
          >
            {children(close)}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
