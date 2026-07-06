"use client";

import { useState } from "react";
import type { ChurchEvent } from "@/lib/events";
import { getEventSharePath } from "@/lib/events";

type EventShareButtonProps = {
  event: ChurchEvent;
  className?: string;
};

export function EventShareButton({ event, className = "" }: EventShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();

    const url = `${window.location.origin}${getEventSharePath(event.id)}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: event.title,
          text: event.description,
          url,
        });
        return;
      }

      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // User cancelled share sheet or clipboard denied
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      aria-label={`Share ${event.title}`}
      className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-xs text-white backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-secondary/40 hover:bg-black/60 ${className}`}
    >
      <span className="material-symbols-outlined text-sm leading-none">
        {copied ? "check" : "share"}
      </span>
      {!copied && <span className="font-medium uppercase tracking-wider">Share</span>}
      {copied && <span className="font-medium uppercase tracking-wider">Copied</span>}
    </button>
  );
}
