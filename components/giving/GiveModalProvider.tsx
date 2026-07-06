"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useSearchParams } from "next/navigation";
import { GiveModal } from "@/components/giving/GiveModal";

type GiveModalContextValue = {
  open: () => void;
  close: () => void;
  isOpen: boolean;
};

const GiveModalContext = createContext<GiveModalContextValue | null>(null);

export function GiveModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ open, close, isOpen }), [open, close, isOpen]);

  return (
    <GiveModalContext.Provider value={value}>
      {children}
      <GiveModal open={isOpen} onClose={close} />
    </GiveModalContext.Provider>
  );
}

export function useGiveModal() {
  const context = useContext(GiveModalContext);
  if (!context) {
    throw new Error("useGiveModal must be used within GiveModalProvider");
  }
  return context;
}

/** Opens the give modal when `?give=1` is in the URL (e.g. /give redirect). */
export function GiveModalAutoOpen() {
  const searchParams = useSearchParams();
  const { open } = useGiveModal();

  useEffect(() => {
    if (searchParams.get("give") === "1") {
      open();
    }
  }, [searchParams, open]);

  return null;
}
