export const navLinks = [
  { href: "/about", label: "About Us" },
  // { href: "/sermons", label: "Sermons" },
  { href: "/ministries", label: "Ministries" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
] as const;

export type NavHref = (typeof navLinks)[number]["href"];
