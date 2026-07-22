import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { EventsList } from "@/components/events/EventsList";
import { Footer } from "@/components/layout/Footer";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Events",
};

export default function EventsPage() {
  return (
    <>
      <section className="relative flex h-[65vh] min-h-[420px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-black/60" />
          <Image
            src={images.heroSlides[0]}
            alt="Church Events"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 px-margin-desktop text-center">
          <p className="mb-4 text-label-md uppercase tracking-[0.3em] text-secondary">
            Gatherings &amp; Encounters
          </p>
          <h1 className="text-display-lg font-display mb-6 text-white">Church Events</h1>
          <div className="mx-auto h-1 w-24 bg-primary-container" />
        </div>
        <div className="spiritual-glow pointer-events-none absolute inset-0" />
      </section>

      <div className="mx-auto max-w-container-max-width px-margin-desktop py-20">
        <Suspense fallback={<p className="py-16 text-center text-on-surface-variant">Loading events…</p>}>
          <EventsList />
        </Suspense>
      </div>

      <Footer />
    </>
  );
}
