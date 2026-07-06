"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useGiveModal } from "@/components/giving/GiveModalProvider";
import { navLinks } from "@/lib/navigation";
import { BrandMark } from "./BrandMark";
import { MobileNav } from "./MobileNav";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { open: openGive } = useGiveModal();

  return (
    <>
      <nav className="fixed top-0 z-50 h-20 w-full border-b border-on-surface/10 bg-surface/80 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex h-full max-w-container-max-width items-center justify-between px-margin-desktop">
          <BrandMark showText />

          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-label-md uppercase tracking-widest transition-colors ${
                  pathname === link.href
                    ? "nav-link-active"
                    : "text-on-surface/80 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={openGive}
              className="cursor-pointer bg-primary-container px-8 py-2.5 text-label-md uppercase tracking-widest text-white shadow-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-primary-container/35 hover:brightness-110 active:scale-95"
            >
              Give
            </button>
          </div>

          <button
            type="button"
            className="text-on-surface transition-transform duration-200 active:scale-90 md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </nav>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
