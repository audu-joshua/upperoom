"use client";

import { useState } from "react";

type CopyButtonProps = {
  value: string;
  label: string;
  compact?: boolean;
};

export function CopyButton({ value, label, compact = false }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`Copy ${label}`}
      className={`inline-flex shrink-0 cursor-pointer items-center gap-1 rounded-full border border-white/15 bg-white/5 font-medium uppercase tracking-wider text-secondary transition-all duration-300 hover:scale-[1.03] hover:border-secondary/40 hover:bg-secondary/10 ${
        compact ? "px-2 py-1 text-[10px]" : "gap-1.5 px-3 py-1.5 text-xs"
      }`}
    >
      <span className={`material-symbols-outlined leading-none ${compact ? "text-xs" : "text-sm"}`}>
        {copied ? "check" : "content_copy"}
      </span>
      {!compact && (copied ? "Copied" : "Copy")}
    </button>
  );
}
