"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";

type GalleryLightboxProps = {
  images: readonly string[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function GalleryLightbox({
  images,
  activeIndex,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const isOpen = activeIndex !== null;

  const goPrev = useCallback(() => {
    if (activeIndex === null) return;
    onNavigate((activeIndex - 1 + images.length) % images.length);
  }, [activeIndex, images.length, onNavigate]);

  const goNext = useCallback(() => {
    if (activeIndex === null) return;
    onNavigate((activeIndex + 1) % images.length);
  }, [activeIndex, images.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, goPrev, goNext]);

  if (!isOpen || activeIndex === null) return null;

  const currentSrc = images[activeIndex];

  return (
    <div
      className="lightroom-viewer fixed inset-0 z-[200] flex flex-col bg-[#0a0a0a]"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      <div className="flex h-14 shrink-0 items-center justify-between px-4 md:px-6">
        <span className="text-sm font-medium tracking-wide text-white/50">
          {activeIndex + 1} / {images.length}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close viewer"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-white/70 transition-all duration-200 hover:bg-white/10 hover:text-white"
        >
          <span className="material-symbols-outlined text-[28px]">close</span>
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-14 md:px-20">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous image"
          className="absolute top-1/2 left-2 z-10 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/80 backdrop-blur-sm transition-all duration-200 hover:border-white/25 hover:bg-black/60 hover:text-white md:left-4 md:h-12 md:w-12"
        >
          <span className="material-symbols-outlined text-[28px]">chevron_left</span>
        </button>

        <div className="relative flex h-full w-full max-h-[calc(100vh-7rem)] items-center justify-center">
          <Image
            src={currentSrc}
            alt={`Gallery image ${activeIndex + 1}`}
            width={1920}
            height={1080}
            className="max-h-full max-w-full object-contain"
            priority
          />
        </div>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next image"
          className="absolute top-1/2 right-2 z-10 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/80 backdrop-blur-sm transition-all duration-200 hover:border-white/25 hover:bg-black/60 hover:text-white md:right-4 md:h-12 md:w-12"
        >
          <span className="material-symbols-outlined text-[28px]">chevron_right</span>
        </button>
      </div>

      <div className="flex h-12 shrink-0 items-center justify-center pb-2">
        <div className="flex gap-1.5">
          {images.map((src, i) => (
            <button
              key={`${src}-${i}`}
              type="button"
              onClick={() => onNavigate(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-6 bg-white/90" : "w-1.5 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
