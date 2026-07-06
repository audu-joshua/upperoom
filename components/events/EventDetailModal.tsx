"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { EventCardImage } from "@/components/events/EventCardImage";
import type { ChurchEvent } from "@/lib/events";
import { formatEventDate } from "@/lib/events";
import { EventShareButton } from "@/components/events/EventShareButton";

type EventDetailModalProps = {
  event: ChurchEvent | null;
  onClose: () => void;
};

export function EventDetailModal({ event, onClose }: EventDetailModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!event) return;

    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [event, onClose]);

  if (!mounted || !event) return null;

  const { full } = formatEventDate(event.date);

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="event-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        aria-label="Close event details"
        onClick={onClose}
      />

      <div className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-white/10 bg-surface-container-low shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
          aria-label="Close"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

      <div className="relative">
          <EventCardImage
            src={event.image}
            alt={event.title}
            variant="modal"
            focus={event.imageFocus}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent" />
        </div>

        <div className="p-6 md:p-8">
          <p className="mb-2 flex items-center gap-2 text-label-md text-secondary">
            <span className="material-symbols-outlined text-base">calendar_today</span>
            {full}
          </p>
          <h2 id="event-modal-title" className="text-headline-md mb-4 text-on-surface">
            {event.title}
          </h2>
          <p className="text-body-md leading-relaxed text-on-surface-variant whitespace-pre-line">
            {event.description}
          </p>
          <div className="mt-6 flex justify-end" data-event-share>
            <EventShareButton event={event} />
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
