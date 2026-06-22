"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

type MobileAccordionSectionProps = {
  label: string;
  isActive?: boolean;
  children: React.ReactNode;
};

export function MobileAccordionSection({
  label,
  isActive,
  children,
}: MobileAccordionSectionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className={cn(
          "flex w-full items-center justify-between rounded-lg px-2 py-3 text-base font-medium transition-colors",
          isActive ? "text-black" : "text-neutral-900"
        )}
      >
        {label}
        <ChevronDown
          className={cn(
            "size-4 transition-transform duration-200",
            open && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-1 py-1 pl-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
