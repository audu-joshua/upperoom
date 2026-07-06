"use client";

import type { ReactNode } from "react";
import { useGiveModal } from "@/components/giving/GiveModalProvider";

type GiveButtonProps = {
  children: ReactNode;
  className?: string;
};

export function GiveButton({ children, className }: GiveButtonProps) {
  const { open } = useGiveModal();

  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}
