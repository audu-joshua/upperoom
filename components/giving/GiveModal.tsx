"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CopyButton } from "@/components/giving/CopyButton";
import {
  givingAccounts,
  onlineGivingUrl,
  type GivingAccount,
} from "@/lib/giving";
import { images } from "@/lib/images";

type GiveModalProps = {
  open: boolean;
  onClose: () => void;
};

function BankRow({
  label,
  value,
  emphasize = false,
}: {
  label: string;
  value: string;
  emphasize?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-white/5 py-2.5 last:border-0">
      <div className="min-w-0">
        <p className="text-[10px] font-medium uppercase tracking-wider text-on-surface-variant">
          {label}
        </p>
        <p
          className={`truncate ${
            emphasize
              ? "font-display text-lg tracking-wide text-secondary"
              : "text-sm text-on-surface"
          }`}
        >
          {value}
        </p>
      </div>
      <CopyButton value={value} label={label} compact />
    </div>
  );
}

export function GiveModal({ open, onClose }: GiveModalProps) {
  const [mounted, setMounted] = useState(false);
  const [activeAccount, setActiveAccount] = useState<GivingAccount["id"]>("ngn");

  const account = givingAccounts.find((item) => item.id === activeAccount) ?? givingAccounts[0];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!mounted || !open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="give-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        aria-label="Close give details"
        onClick={onClose}
      />

      <div className="modal-scroll relative z-10 max-h-[min(580px,94vh)] w-full max-w-md overflow-hidden rounded-xl border border-white/10 bg-surface-container-low shadow-2xl">
        <div className="relative h-[112px] shrink-0 overflow-hidden sm:h-[120px]">
          <Image
            src={images.heroSlides[2]}
            alt=""
            fill
            className="object-cover object-[50%_30%]"
            sizes="448px"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="spiritual-glow absolute inset-0 opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

          <button
            type="button"
            onClick={onClose}
            className="absolute top-2.5 right-2.5 z-20 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>

          <div className="relative z-10 flex h-full flex-col justify-center px-5 pr-12">
            <h2
              id="give-modal-title"
              className="font-display text-2xl leading-tight text-white sm:text-[1.7rem]"
            >
              Partner With Us
            </h2>
            <p className="mt-1.5 text-sm italic text-white/85 sm:text-[15px]">
              &ldquo;God loves a cheerful giver.&rdquo; 2 Cor 9:7
            </p>
          </div>
        </div>

        <div className="p-5">
          <div className="mb-3.5 flex rounded-md border border-white/10 bg-surface-container p-0.5">
            {givingAccounts.map((item) => {
              const isActive = item.id === activeAccount;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveAccount(item.id)}
                  className={`flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded px-2 py-1.5 text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-secondary text-on-secondary shadow-sm"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  <span className="text-sm leading-none">{item.symbol}</span>
                  {item.label}
                </button>
              );
            })}
          </div>

          {account.available ? (
            <div className="rounded-lg border border-white/8 bg-surface-container/60 px-3.5 py-1.5">
              <BankRow label="Bank" value={account.bank.name} />
              <BankRow label="Account Name" value={account.bank.accountName} />
              <BankRow label="Account Number" value={account.bank.accountNumber} emphasize />
              {account.bank.swiftCode ? (
                <BankRow label="SWIFT / BIC" value={account.bank.swiftCode} />
              ) : null}
            </div>
          ) : (
            <div className="rounded-lg border border-white/8 bg-surface-container/60 px-3 py-4 text-center">
              <span className="material-symbols-outlined mb-1.5 text-2xl text-secondary/80">
                public
              </span>
              <p className="text-xs leading-relaxed text-on-surface-variant">
                {account.unavailableMessage}
              </p>
            </div>
          )}

          {account.available && (
            <p className="mt-2.5 text-[11px] leading-snug text-on-surface-variant">
              Use your name or &ldquo;Offering&rdquo; / &ldquo;Tithe&rdquo; as the narration.
            </p>
          )}

          {onlineGivingUrl && (
            <a
              href={onlineGivingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-md bg-secondary px-4 py-2.5 text-[11px] font-medium uppercase tracking-widest text-on-secondary transition-all duration-300 hover:brightness-110"
            >
              Give Online
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
