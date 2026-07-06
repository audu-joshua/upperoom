export type ChurchEvent = {
  id: string;
  title: string;
  description: string;
  image: string;
  /** ISO date string, e.g. "2024-10-24" */
  date: string;
  /** Optional CSS object-position override, e.g. "50% 35%" */
  imageFocus?: string;
};

export const churchEvents: ChurchEvent[] = [
  {
    id: "annual-revival",
    title: "Annual Revival Conference",
    description:
      "A three-day spiritual awakening with guest speakers and anointed worship. Join us for powerful teaching, prophetic ministry, and breakthrough prayer sessions across three unforgettable days at Upper Room Cathedral.",
    image: "/upperoom16.webp",
    date: "2024-10-24",
  },
  {
    id: "prophetic-prayer-summit",
    title: "Prophetic Prayer Summit",
    description:
      "An intense time of intercession and prophetic insights for the season ahead. Join us every first Friday for a night of intense intercession, midnight worship, and personal prophetic ministry.",
    image: "/prayer.webp",
    date: "2024-11-12",
  },
  {
    id: "youth-explosion",
    title: "Youth Explosion",
    description:
      "A high-energy night of contemporary worship, spoken word, and radical faith built for young believers. Come expectant for a fresh encounter with God and community with peers who are passionate about the kingdom.",
    image: "/upperoom19.webp",
    date: "2024-08-24",
  },
  {
    id: "leadership-intensive",
    title: "Leadership Intensive",
    description:
      "Specialized training for ministry leads and those aspiring to serve in the kingdom. Practical sessions on servant leadership, team building, and carrying the vision of Upper Room Cathedral with excellence.",
    image: "/upperoom13.webp",
    date: "2024-09-05",
  },
  {
    id: "women-of-virtue",
    title: "Women of Virtue Brunch",
    description:
      "Fellowship and empowerment for women of all ages. Enjoy a morning of worship, teaching, and sisterhood as we celebrate godly womanhood and purpose in Christ.",
    image: "/upperoom8.webp",
    date: "2024-09-12",
  },
  {
    id: "thanksgiving-service",
    title: "End of Year Thanksgiving",
    description:
      "Join us as we close the year in gratitude, praise, and reflection on God's faithfulness. A special service of worship, testimonies, and thanksgiving for all He has done in our lives and through Upper Room Cathedral.",
    image: "/upperoom10.webp",
    date: "2024-12-14",
  },
];

export function formatEventDate(date: string) {
  const parsed = new Date(`${date}T12:00:00`);

  return {
    day: parsed.getDate().toString().padStart(2, "0"),
    month: parsed.toLocaleDateString("en-US", { month: "short", year: "numeric" }),
    full: parsed.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    filterKey: `${parsed.getFullYear()}-${String(parsed.getMonth() + 1).padStart(2, "0")}`,
    filterLabel: parsed.toLocaleDateString("en-US", { month: "long", year: "numeric" }),
  };
}

export function getEventMonthFilters(events: ChurchEvent[]) {
  const seen = new Map<string, string>();

  for (const event of events) {
    const { filterKey, filterLabel } = formatEventDate(event.date);
    seen.set(filterKey, filterLabel);
  }

  return [...seen.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([value, label]) => ({ value, label }));
}

export function sortEventsByDate(events: ChurchEvent[]) {
  return [...events].sort(
    (a, b) => new Date(`${a.date}T12:00:00`).getTime() - new Date(`${b.date}T12:00:00`).getTime(),
  );
}

export function getEventSharePath(id: string) {
  return `/events?event=${id}`;
}

export function findEventById(id: string) {
  return churchEvents.find((event) => event.id === id) ?? null;
}
