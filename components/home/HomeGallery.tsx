"use client";

import Image from "next/image";
import { useState } from "react";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { images } from "@/lib/images";

export function HomeGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const galleryImages = images.gallery;

  return (
    <section id="gallery" className="bg-background px-margin-desktop py-24">
      <div className="mx-auto max-w-container-max-width">
        <RevealOnScroll className="active mb-16 text-center">
          <h2 className="text-headline-lg">Moments in His Presence</h2>
        </RevealOnScroll>

        <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
          {galleryImages.map((src, i) => (
            <RevealOnScroll
              key={`${src}-${i}`}
              className="active overflow-hidden rounded-xl"
              delay={i * 50}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                className="group relative w-full cursor-pointer overflow-hidden rounded-xl text-left"
                aria-label={`Open image ${i + 1} in fullscreen viewer`}
              >
                <Image
                  src={src}
                  alt=""
                  width={600}
                  height={400}
                  className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
              </button>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      <GalleryLightbox
        images={galleryImages}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  );
}
