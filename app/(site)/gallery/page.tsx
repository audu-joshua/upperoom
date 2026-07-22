"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Footer } from "@/components/layout/Footer";

const filters = ["All", "Worship", "Community", "Outreach", "Youth"];

const galleryItems = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSGdvzNx7TtibFmCl5olZlHRcrGWOPlWYYecVQ0Ksd9j671me1jM-IYqiM090Kp4Sv-t1_2PjOJ9kyPuev-Qw1Beguuov4ZTA6bWPFXOkQQ9vrw-qr1V_AwukMfobpPxHjn68anZNgki-MybWVwoV4YzpNoWUj5NTUHdT3X_8UxKfMu8k21x_j2yhxqL5J5-mgl44mNT7pYu3aW7s0Sqg8a5oNALrYm3bwfMc267TcNJpZcq2Pe-yV0Q",
    label: "Worship Night",
    title: "Sacred Encounter",
    height: "h-[400px]",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCf3fDviD4b7wOljD_DC069uIx6PYP552dROBAxZMnED2_z3eMxMf_5eO7H1Nzg8vyXKB7FpS1xuFLaXPeqOVVZ9nUtCqgLYA9fRz4yLI_SnESR33mODgmn97jFzqUjv02Xb58-sD1DVhXk9oaEpXgtSizGrB3Y0vh6xE863VHMbXGbMJV5oLS4ZPRRhrLkr2czhcwcnEMAHr6Lwj2LaIOtu2Rtx0GnGXfP9AGfib0XhtJOKs2rcErGaA",
    label: "Community",
    title: "Strength in Unity",
    height: "h-[300px]",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeOHtLb_Ip5WpNP7KnU6RgMx7yhqlIFn-zNmhF6QQIoy7Q6BytSQ-kf439DhDfX1ph71vVzrjq_9GFv56V8w3GVrjWy1J6QgsVnsMsXBgj0xt8285D5updJlA3Oe7v2ePTgZRRogp_duCfLQsKtqd53nvf8fuR2vXC8-n1yBTB2gUh5RfYWxmI64dYHnuno82K90spieUqcLE9GxxeU3hhIOEmnMgMiZgiwx5hHD4fg3fMVU7PBDaVsQ",
    label: "Outreach",
    title: "Light in the City",
    height: "h-[500px]",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWipZoOFPctbSKSG4XbLhMqabF1H3_MDBgSf8vceyrcgyc0DXxPr5mcIRsqg6WE2kKo3QTIvRQPMOGQ11JypDiPh9GVQu7Lo7R6C2ban82ItaZ6DOKTNFLYm21UGdGNb8wKZuqS2r8TMYGy5vsctW4pqnMzFB6Or36GuSSRi8YlVDB3hRd1e4a6ZB4k7R-V_-to2EqI5mjKh_ncyINw7HznQ98OnDEqbuViNpAJSmHruMJ6IpGavnZ_A",
    label: "Sanctuary",
    title: "The Inner Room",
    height: "h-[350px]",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLfC6sRmRkofo6lvhqouxvwHxaVd6_xDYXbCU0fr6VBall4e_r7ioua7M3NsAJ_0re9ow5uG05L9N-XHAG5bZ4_bRsqfs1jtggj_kSECNIohVt1pgtT4N0GEo9KK9yeYVE-O1iVvAz_Op4mx7KSR-_ow0grXOZ5d9EVSW8ppMrnR_TtVZEsysQm01FG_YAqRbcfeDwenTHtrm4skyb2JafLhJOI-QX0W7_wsvu-ZmodqDbcvw-nqETbw",
    label: "Youth Revival",
    title: "The Next Generation",
    height: "h-[450px]",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAf4mwNX98Xkvr0o9pLhTpvSpPj8W3T0F8G2l4u163Q361pyCNDP-Jo4wN-GYcfYzkQyShsnx2oyGA8NpOEBrUR1nGQGEc8vNH6KzzrqyeYgRDbvM1Swd1mUgTp2TF_UZ6UIMxvA6dBXGaWlq_krLUf_AHq6PWZi7OYvE-2Y8o5D-YHDHLtoq9P5yrlqAnw04QnboO5YrJt6Q86mYN2c-N8b-NvkpEly4NwCZE9kce8SL57zBplFFdGnQ",
    label: "Prayer",
    title: "Personal Altar",
    height: "h-[380px]",
  },
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<(typeof galleryItems)[0] | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    document.body.style.overflow = lightbox ? "hidden" : "";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <>
      <header className="relative overflow-hidden pt-32 pb-20">
        <div className="spiritual-glow absolute inset-0 -z-10 h-[600px]" />
        <div className="mx-auto max-w-container-max-width px-margin-desktop text-center">
          <span className="mb-4 block text-label-md uppercase tracking-[0.3em] text-primary">Visual Ministry</span>
          <h1 className="text-display-lg font-display mb-6 leading-none">Moments of Glory</h1>
          <p className="mx-auto max-w-2xl text-body-lg text-on-surface-variant opacity-80">
            Experience the atmosphere of revival, the warmth of community, and the transformative power of worship at Upper Room Cathedral.
          </p>
        </div>
      </header>

      <div className="mx-auto mb-12 max-w-container-max-width px-margin-desktop">
        <div className="flex flex-wrap justify-center gap-4">
          {filters.map((f, i) => (
            <button
              key={f}
              type="button"
              className={`glass-card rounded-full px-6 py-2 text-label-md uppercase tracking-widest ${i === 0 ? "border-primary/40 text-primary" : "text-on-surface/60 hover:border-primary/40 hover:text-primary"}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <main className="mx-auto max-w-container-max-width px-margin-desktop pb-32">
        <div className="masonry-grid">
          {galleryItems.map((item) => (
            <button
              key={item.title}
              type="button"
              className="masonry-item glass-card group relative w-full cursor-pointer overflow-hidden rounded-xl text-left transition-all duration-500 hover:scale-[1.02]"
              onClick={() => setLightbox(item)}
            >
              <div className={`relative ${item.height}`}>
                <Image src={item.src} alt={item.title} fill className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                <div className="cinematic-overlay absolute inset-0 opacity-60 transition-opacity group-hover:opacity-90" />
                <div className="absolute bottom-0 left-0 w-full translate-y-4 transform p-6 transition-transform group-hover:translate-y-0">
                  <span className="text-label-md uppercase tracking-widest text-secondary">{item.label}</span>
                  <h3 className="mt-1 text-title-lg text-white">{item.title}</h3>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button type="button" className="rounded-full border border-secondary px-12 py-4 text-label-md uppercase tracking-widest text-secondary transition-all duration-300 hover:bg-secondary hover:text-on-secondary">
            Load More Memories
          </button>
        </div>
      </main>

      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/95 transition-opacity duration-300 ${lightbox ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setLightbox(null)}
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          className="absolute top-8 right-8 text-white transition-colors hover:text-primary"
          onClick={() => setLightbox(null)}
          aria-label="Close lightbox"
        >
          <span className="material-symbols-outlined text-4xl">close</span>
        </button>
        {lightbox && (
          <div className="w-full max-w-5xl px-4" onClick={(e) => e.stopPropagation()}>
            <Image src={lightbox.src} alt={lightbox.title} width={1200} height={800} className="max-h-[80vh] w-full rounded-lg object-contain" />
            <div className="mt-6 text-center">
              <h2 className="text-headline-md text-white">{lightbox.title}</h2>
              <p className="mt-2 text-label-md uppercase tracking-widest text-secondary">{lightbox.label}</p>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
