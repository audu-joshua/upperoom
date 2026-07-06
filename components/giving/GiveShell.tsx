"use client";

import { Suspense } from "react";
import { GiveModalAutoOpen, GiveModalProvider } from "@/components/giving/GiveModalProvider";

export function GiveShell({ children }: { children: React.ReactNode }) {
  return (
    <GiveModalProvider>
      <Suspense fallback={null}>
        <GiveModalAutoOpen />
      </Suspense>
      {children}
    </GiveModalProvider>
  );
}
