"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Open/close state with a delayed close so moving the cursor off a trigger
 * or panel for a brief moment (e.g. crossing the gap between them) doesn't
 * immediately collapse it. Re-entering before the delay elapses cancels the
 * pending close.
 */
export function useHoverDelay(delayMs = 150) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleOpen = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, delayMs);
  }, [delayMs]);

  const closeImmediately = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpen(false);
  }, []);

  return { open, setOpen, handleOpen, handleClose, closeImmediately };
}
