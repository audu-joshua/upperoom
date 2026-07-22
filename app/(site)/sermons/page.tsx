import type { Metadata } from "next";
import Image from "next/image";
import { GiveButton } from "@/components/giving/GiveButton";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Sermons",
};

const series = [
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGuUn3Ti00bUczqloBNDgrBYIjoIcl54RtvZ7Nc90vO208mI7gQb3W35yoQg7jdnuxwW_rwO5UlAp0qfDTUkYFKZPfv4KdDC5vs-S4KdQ45j9qptgi4mfXJX-efwszEp6GBZik4DhCCKW07gNpiVDdcogV9EigGvl6TffTLw3sQGnPiM5YcakREdwiVsQPoezihO3-u-RU2031FE3aH0c1dtx7vfC5Okibvai5Ngu2cfZBQZrZEia2Kw",
    count: "8 Messages",
    title: "The Fire Within",
    desc: "Exploring the transformative power of internal spiritual awakening through apostolic teaching.",
    speaker: "Dr. Silas Vance",
    date: "OCT 2024",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOiWYhu6MxSDrkBHRS8LyJCM596AjyPnFXIw7qt7eoIxzlSXpBhHPxhqQD2NcHbNU1XZmh6-fw6wKqjBC5MkucfczHBDdsuFq2viIfTtp971Hpc1slRTdSEFfBzIJ66Mo2QRhLjE_dMPv0HBnhU5wR8iMAQ25woIKEbs85EVoqj41ivXqb3_LYPR8aI2Ot63FX36gIHT6zUCDf6SLlWOvMtTeDkrdhLgeQV28q5uPr-GNUdVcuMTxnMw",
    count: "12 Messages",
    title: "Foundations",
    desc: "A masterclass on the essential pillars of faith that build an unshakable life in a shifting world.",
    speaker: "Pastor Sarah Wells",
    date: "AUG 2024",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAM072Xz33y0Ne7SvmVj11ga9Uygbaw30MqDpc7SNTUMk9Wwr4eOZ4QSdCdMa9-KN-ySA4bkEp_5KKq6qazlmj3LhRA6CTFb_1wCnyHF4pYZOfgcHmii3eGyGtJrKd5jwmKJ_xNZwxzEBy4c8Sr6Z8IOp1FV-r9lXVqXy7NWoCjD2WuCgUxWCiIV8hWY6EHYmPbGrhzC4U4aZzG3VNwvcgM_jO7XN7K6QBapqyPW4krHQrMfN7WLycWTg",
    count: "6 Messages",
    title: "Heavenly Realms",
    desc: "Navigating the spiritual dimension and understanding our authority in Christ Jesus.",
    speaker: "Min. David Park",
    date: "JUN 2024",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3_IWebNftbkZ450FFo7lYrB7KHsIzjonOwe6HnTu9PSVN4hMbnC_z6UkmN7t9bYzgDuoPZJcN2c2Bd8RgcZxruAv37VhNJ5JEGE26y_aBClkXamYhqfVOrUSyAo57Sz-BXdX7ZF6lbpeKlgR4rRwpKBROAXWxbTTE_Q12fCxtEVkITm3gzu0SjY_LURA7Il8G_YUUsb4fWhC8XU7e9-liOjypVPOa_2RU69UqHa4nkld4IXvJeqZH2g",
    count: "4 Messages",
    title: "Echoes of Praise",
    desc: "Understanding the biblical theology of worship and the power of congregational song.",
    speaker: "Pastor Jonathan Cross",
    date: "MAY 2024",
  },
];

const filters = ["All Series", "Theology", "Leadership", "Worship"];

export default function SermonsPage() {
  return (
    <>
      <section className="relative overflow-hidden px-margin-desktop pt-32 pb-24">
        <div className="spiritual-glow pointer-events-none absolute top-0 left-1/2 h-full w-[120%] -translate-x-1/2" />
        <div className="relative mx-auto flex max-w-container-max-width flex-col items-center gap-12 lg:flex-row">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary-container/20 px-3 py-1 text-primary">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              <span className="text-label-md uppercase tracking-wider">Latest Sermon</span>
            </div>
            <h1 className="text-display-lg font-display leading-tight text-white">
              Finding The Fire <span className="gradient-text">Within Your Soul</span>
            </h1>
            <p className="max-w-xl text-body-lg text-on-surface-variant">
              Join Pastor Jonathan Cross for an immersive dive into the spirit-filled life. Discover how the ancient fire of the Holy Spirit still burns bright in our contemporary world.
            </p>
            <div className="flex items-center gap-8 py-4">
              <div>
                <span className="text-[12px] uppercase text-on-surface-variant/60">Speaker</span>
                <p className="text-title-lg text-white">Pastor Jonathan Cross</p>
              </div>
              <div className="h-10 w-px bg-outline-variant/30" />
              <div>
                <span className="text-[12px] uppercase text-on-surface-variant/60">Date</span>
                <p className="text-title-lg text-white">Dec 15, 2024</p>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <button type="button" className="flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-label-md text-on-primary transition-transform hover:scale-105">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                Watch Now
              </button>
              <button type="button" className="flex items-center gap-2 rounded-lg border border-outline px-8 py-4 text-label-md text-white transition-colors hover:bg-white/5">
                <span className="material-symbols-outlined">description</span>
                Transcript
              </button>
            </div>
          </div>

          <div className="group relative w-full flex-1">
            <div className="absolute -inset-4 rounded-2xl bg-primary/10 blur-3xl transition-all duration-700 group-hover:bg-primary/20" />
            <div className="glass-card relative aspect-video overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBkWpctrZqWVszDn1wOq0CxfNk8gcJeC9fIn944PnKWEojhOXAVWCF_rG6SAzW7tigGB3kvGGdxz49sQJ5VSIKKAyMPQGFkYA89UZ3fTqA7AOIqtNUGEBKkL0S4tci4pQWR80zP-PM6ORW6yvRinQvAy244-ICXa7N8BP9PqYoMgpwWm0V4e-ryOnb-2ox92NxM4Jv4RNTN8RQJwl4nJpZzZZ8pAGwk4J61Hlvx95fZAdWPf9lJ9S5-Q"
                alt="Latest sermon"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <div className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-primary-container/90 shadow-2xl transition-transform hover:scale-110">
                  <span className="material-symbols-outlined text-[40px] text-white" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="mb-4 h-1 w-full rounded-full bg-on-surface/20">
                  <div className="relative h-full w-1/3 rounded-full bg-primary">
                    <div className="absolute top-1/2 right-0 h-3 w-3 -translate-y-1/2 rounded-full bg-white shadow-lg" />
                  </div>
                </div>
                <div className="flex justify-between text-[12px] text-label-md text-on-surface-variant">
                  <span>12:45 / 45:00</span>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-[18px]">volume_up</span>
                    <span className="material-symbols-outlined text-[18px]">fullscreen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-outline-variant/10 bg-surface-container-low/30 py-24">
        <div className="mx-auto max-w-container-max-width px-margin-desktop">
          <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
            <div className="space-y-4">
              <h2 className="text-headline-lg text-white">Sermon Library</h2>
              <div className="flex flex-wrap gap-4">
                {filters.map((f, i) => (
                  <button key={f} type="button" className={`rounded-full px-6 py-2 text-label-md ${i === 0 ? "bg-primary text-on-primary" : "border border-outline/30 text-on-surface-variant hover:border-primary"}`}>
                    {f}
                  </button>
                ))}
              </div>
            </div>
            <div className="relative w-full md:w-96">
              <span className="material-symbols-outlined absolute top-1/2 left-4 -translate-y-1/2 text-on-surface-variant/60">search</span>
              <input className="w-full rounded-xl border-outline/20 bg-surface-container py-4 pr-6 pl-12 text-white transition-all focus:border-primary-container focus:ring-1 focus:ring-primary-container" placeholder="Search sermons, speakers, or topics..." type="text" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {series.map((s) => (
              <div key={s.title} className="glass-card group overflow-hidden rounded-2xl">
                <div className="relative h-56 overflow-hidden">
                  <Image src={s.image} alt={s.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 rounded-lg bg-black/60 px-3 py-1 text-[12px] text-label-md text-secondary backdrop-blur-md">{s.count}</div>
                </div>
                <div className="space-y-4 p-8">
                  <h3 className="text-title-lg text-white">{s.title}</h3>
                  <p className="line-clamp-2 text-body-md text-on-surface-variant">{s.desc}</p>
                  <div className="flex items-center justify-between border-t border-outline-variant/20 pt-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full border border-outline/20 bg-surface-container-highest" />
                      <span className="text-sm text-label-md text-on-surface">{s.speaker}</span>
                    </div>
                    <span className="text-[12px] text-label-md text-on-surface-variant/60">{s.date}</span>
                  </div>
                </div>
              </div>
            ))}

            <div className="group relative overflow-hidden rounded-2xl p-1 lg:col-span-2">
              <div className="absolute inset-0 animate-[spin_4s_linear_infinite] bg-gradient-to-r from-secondary/80 via-primary/50 to-secondary/80 opacity-30" />
              <div className="relative flex h-full w-full flex-col items-center gap-10 rounded-2xl bg-surface-container-lowest p-10 md:flex-row">
                <div className="flex-1 space-y-6">
                  <h3 className="text-headline-md text-white">Support the Ministry</h3>
                  <p className="text-body-lg text-on-surface-variant">
                    Your generosity fuels our mission to spread the Gospel across the globe. Partner with us to reach millions with the word of God.
                  </p>
                  <GiveButton className="rounded-lg bg-secondary px-10 py-4 text-label-md text-on-secondary transition-all hover:brightness-110">
                    Give Online Now
                  </GiveButton>
                </div>
                <span className="material-symbols-outlined hidden text-[120px] text-secondary/20 md:block" style={{ fontVariationSettings: "'FILL' 1" }}>volunteer_activism</span>
              </div>
            </div>
          </div>

          <div className="mt-20 flex justify-center gap-4">
            <button type="button" className="flex h-12 w-12 items-center justify-center rounded-full border border-outline/20 text-on-surface-variant hover:border-primary"><span className="material-symbols-outlined">chevron_left</span></button>
            <button type="button" className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-bold text-on-primary">1</button>
            <button type="button" className="flex h-12 w-12 items-center justify-center rounded-full border border-outline/20 text-on-surface-variant hover:border-primary">2</button>
            <button type="button" className="flex h-12 w-12 items-center justify-center rounded-full border border-outline/20 text-on-surface-variant hover:border-primary">3</button>
            <button type="button" className="flex h-12 w-12 items-center justify-center rounded-full border border-outline/20 text-on-surface-variant hover:border-primary"><span className="material-symbols-outlined">chevron_right</span></button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
