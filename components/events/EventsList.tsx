"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { EventCardImage } from "@/components/events/EventCardImage";
import { EventDetailModal } from "@/components/events/EventDetailModal";
import { EventShareButton } from "@/components/events/EventShareButton";
import { CustomSelect } from "@/components/ui/CustomSelect";
import {
  type ChurchEvent,
  churchEvents,
  findEventById,
  formatEventDate,
  getEventMonthFilters,
  getEventSharePath,
  sortEventsByDate,
} from "@/lib/events";

function isShareTarget(target: EventTarget) {
  return (target as HTMLElement).closest("[data-event-share]") !== null;
}

export function EventsList() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selected, setSelected] = useState<ChurchEvent | null>(null);
  const [monthFilter, setMonthFilter] = useState("all");

  const monthFilters = useMemo(() => getEventMonthFilters(churchEvents), []);

  const monthFilterOptions = useMemo(
    () => [{ value: "all", label: "All months" }, ...monthFilters],
    [monthFilters],
  );

  const filteredEvents = useMemo(() => {
    const sorted = sortEventsByDate(churchEvents);

    if (monthFilter === "all") return sorted;

    return sorted.filter((event) => formatEventDate(event.date).filterKey === monthFilter);
  }, [monthFilter]);

  const openEvent = useCallback(
    (event: ChurchEvent) => {
      setSelected(event);
      router.replace(getEventSharePath(event.id), { scroll: false });
    },
    [router],
  );

  const closeEvent = useCallback(() => {
    setSelected(null);
    router.replace("/events", { scroll: false });
  }, [router]);

  useEffect(() => {
    const eventId = searchParams.get("event");
    if (!eventId) {
      setSelected(null);
      return;
    }

    setSelected(findEventById(eventId));
  }, [searchParams]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <p className="text-body-md text-on-surface-variant">
          {filteredEvents.length} event{filteredEvents.length === 1 ? "" : "s"}
        </p>
        <CustomSelect
          label="Filter by month"
          value={monthFilter}
          onChange={setMonthFilter}
          options={monthFilterOptions}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.map((event) => {
          const { month, day } = formatEventDate(event.date);

          return (
            <article
              key={event.id}
              tabIndex={0}
              onClick={(e) => {
                if (isShareTarget(e.target)) return;
                openEvent(event);
              }}
              onKeyDown={(e) => {
                if (isShareTarget(e.target)) return;
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openEvent(event);
                }
              }}
              className="group relative cursor-pointer overflow-hidden rounded-lg glass text-left transition-all duration-300 hover:border-secondary/20 hover:bg-surface-container/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50"
            >
              <div className="relative overflow-hidden">
                <EventCardImage
                  src={event.image}
                  alt={event.title}
                  variant="card"
                  focus={event.imageFocus}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div
                  data-event-share
                  className="absolute top-2.5 right-2.5 z-10"
                  onClick={(e) => e.stopPropagation()}
                  onKeyDown={(e) => e.stopPropagation()}
                >
                  <EventShareButton event={event} />
                </div>
                <div className="absolute bottom-3 left-3 pointer-events-none">
                  <div className="flex h-11 w-11 flex-col items-center justify-center rounded-md bg-black/50 text-center backdrop-blur-sm">
                    <span className="font-display text-base leading-none text-secondary">{day}</span>
                    <span className="text-[9px] uppercase tracking-wider text-white/80">
                      {month.split(" ")[0]}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="mb-1.5 text-base font-semibold text-on-surface transition-colors group-hover:text-primary">
                  {event.title}
                </h3>
                <p className="line-clamp-2 text-sm leading-relaxed text-on-surface-variant">
                  {event.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      {filteredEvents.length === 0 && (
        <p className="py-16 text-center text-body-md text-on-surface-variant">
          No events found for this month.
        </p>
      )}

      <EventDetailModal event={selected} onClose={closeEvent} />
    </div>
  );
}
