"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FacebookIcon,
  TikTokIcon,
  YouTubeIcon,
} from "@/components/icons/SocialIcons";
import { useGiveModal } from "@/components/giving/GiveModalProvider";
import { navLinks } from "@/lib/navigation";
import { BrandMark } from "./BrandMark";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

const socialLinks = [
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "YouTube", href: "#", Icon: YouTubeIcon },
  { label: "TikTok", href: "#", Icon: TikTokIcon },
];

export function MobileNav({ open, onClose }: MobileNavProps) {
  const [mounted, setMounted] = useState(false);
  const { open: openGive } = useGiveModal();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => setMounted(true));
    } else {
      setMounted(false);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col bg-[rgba(18,20,20,0.95)] backdrop-blur-2xl spiritual-glow transition-opacity duration-300 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
    >
      <header
        className={`flex h-20 items-center justify-between px-margin-desktop transition-all duration-300 ${
          mounted ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
        }`}
      >
        <BrandMark showText={false} onNavigate={onClose} logoClassName="h-10 w-10" />
        <button
          type="button"
          className="p-2 text-on-surface transition-colors hover:text-primary"
          onClick={onClose}
          aria-label="Close menu"
        >
          <span className="material-symbols-outlined text-[32px]">close</span>
        </button>
      </header>

      <nav className="flex flex-grow flex-col items-center justify-center space-y-8 px-margin-desktop">
        <div className="flex flex-col items-center space-y-6">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="group relative mobile-nav-link"
              style={{ animationDelay: `${120 + index * 70}ms` }}
            >
              <span className="text-display-lg font-display text-on-surface transition-colors duration-500 group-hover:text-secondary">
                {link.label}
              </span>
            </Link>
          ))}
        </div>

        <div
          className="flex w-full max-w-xs flex-col gap-4 pt-8 mobile-nav-link"
          style={{ animationDelay: `${120 + navLinks.length * 70}ms` }}
        >
          <button
            type="button"
            onClick={() => {
              onClose();
              openGive();
            }}
            className="w-full cursor-pointer rounded-lg bg-primary-container px-8 py-5 text-label-md uppercase tracking-[0.2em] text-white shadow-lg shadow-primary-container/20 transition-all duration-300 hover:scale-[1.02] hover:brightness-110 active:scale-95"
          >
            Give
          </button>
          <Link
            href="/login"
            onClick={onClose}
            className="block w-full cursor-pointer rounded-lg bg-secondary px-8 py-5 text-center text-label-md uppercase tracking-[0.2em] text-on-secondary shadow-lg shadow-secondary/20 transition-all duration-300 hover:scale-[1.02] hover:brightness-110 active:scale-95"
          >
            Login
          </Link>
        </div>
      </nav>

      <footer
        className={`flex flex-col items-center space-y-6 px-margin-desktop pb-12 transition-all duration-500 ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
        style={{ transitionDelay: "280ms" }}
      >
        <div className="text-center">
          <p className="text-body-md italic text-secondary opacity-90">
            &ldquo;But we will give ourselves continually to prayer, and to the
            ministry of the word.&rdquo;
          </p>
          <span className="mt-2 block text-label-md uppercase tracking-widest text-outline">
            Acts 6:4
          </span>
        </div>

        <div className="flex items-center gap-6">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-on-surface-variant transition-all duration-300 hover:scale-110 hover:border-secondary/40 hover:text-secondary"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <div className="h-px w-12 bg-outline-variant/30" />
      </footer>
    </div>
  );
}
