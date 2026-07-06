"use client";

import { useState } from "react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { EventDetailModal } from "@/components/events/EventDetailModal";
import { EventShareButton } from "@/components/events/EventShareButton";
import {
  type ChurchEvent,
  churchEvents,
  formatEventDate,
  sortEventsByDate,
} from "@/lib/events";

const featuredEvents = sortEventsByDate(churchEvents).slice(0, 2);

export function HomeEventsSection() {
  const [selected, setSelected] = useState<ChurchEvent | null>(null);

  return (
    <>
      <section id="events" className="bg-surface-container-highest px-margin-desktop py-24">
        <div className="mx-auto max-w-container-max-width">
          <RevealOnScroll className="active mb-16">
            <h2 className="text-headline-lg text-on-surface">Upcoming Gatherings</h2>
          </RevealOnScroll>
          <div className="space-y-6">
            {featuredEvents.map((event) => {
              const { day, month } = formatEventDate(event.date);

              return (
                <RevealOnScroll key={event.id} className="active">
                  <div className="group relative rounded-xl glass transition-all duration-300 hover:border-secondary/20 hover:bg-surface-container/50">
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => setSelected(event)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setSelected(event);
                        }
                      }}
                      className="flex w-full cursor-pointer flex-col items-center gap-8 p-6 text-left md:flex-row"
                    >
                      <div className="w-full border-on-surface/10 text-center md:w-48 md:border-r md:pr-8">
                        <span className="block font-display text-4xl text-secondary">{day}</span>
                        <span className="block text-label-md uppercase tracking-widest text-on-surface">
                          {month}
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-title-lg mb-2 text-on-surface transition-colors group-hover:text-primary">
                          {event.title}
                        </h3>
                        <p className="line-clamp-2 text-body-md text-on-surface-variant">
                          {event.description}
                        </p>
                        <span className="mt-3 inline-flex items-center gap-1 text-label-md text-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          View details
                          <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </span>
                      </div>
                    </div>
                    <div
                      data-event-share
                      className="absolute top-4 right-4"
                      onClick={(e) => e.stopPropagation()}
                      onKeyDown={(e) => e.stopPropagation()}
                    >
                      <EventShareButton event={event} />
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <EventDetailModal event={selected} onClose={() => setSelected(null)} />
    </>
  );
}
