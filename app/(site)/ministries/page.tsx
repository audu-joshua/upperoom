import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Ministries",
};

const ministries = [
  {
    badge: "Prayer and the Word",
    title: "The Engine Room",
    text: "At the heart of Upper Room Cathedral is a relentless commitment to intercession. Our Prayer Ministry operates 24/7, standing in the gap for our community and the world, rooted in the foundational truth of Acts 6:4.",
    image: images.ministries.prayer,
    imageFocus: "50% 35%",
    glow: "bg-primary-container/20 group-hover:bg-primary-container/30",
    btn: "bg-primary-container text-white hover:brightness-125",
    btnLabel: "Get Involved",
    reverse: false,
  },
  {
    badge: "Divine Presence",
    title: "Atmospheric Worship",
    text: "We believe worship is a supernatural encounter. Our worship ministry creates an atmosphere of awe, blending contemporary energy with timeless reverence to lead the congregation into the very throne room of God.",
    image: images.ministries.worship,
    imageFocus: "50% 30%",
    glow: "bg-secondary/10 group-hover:bg-secondary/20",
    btn: "border border-secondary text-secondary hover:bg-secondary hover:text-on-secondary",
    btnLabel: "Join the Choir",
    reverse: true,
  },
  {
    badge: "Next Generation",
    title: "Upper Room Youth",
    text: "Empowering the leaders of tomorrow today. Our youth ministry provides a safe, vibrant space for teenagers and young adults to explore their faith, find community, and discover their unique purpose in God's kingdom.",
    image: images.ministries.youth,
    imageFocus: "50% 25%",
    glow: "bg-tertiary/10 group-hover:bg-tertiary/20",
    btn: "bg-primary-container text-white hover:brightness-125",
    btnLabel: "Join a Group",
    reverse: false,
  },
  {
    badge: "Global Impact",
    title: "Mission Outreach",
    text: "Extending the hands of Christ beyond our walls. From local food drives to international mission trips, we are dedicated to transforming lives through compassionate action and the message of hope.",
    image: images.ministries.outreach,
    imageFocus: "50% 30%",
    glow: "bg-primary-container/10 group-hover:bg-primary-container/20",
    btn: "bg-white text-black hover:bg-primary-container hover:text-white",
    btnLabel: "Sign Up to Volunteer",
    reverse: true,
  },
];

export default function MinistriesPage() {
  return (
    <>
      <section className="relative flex h-[60vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={images.ministries.hero}
            alt=""
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "50% 35%" }}
            sizes="100vw"
          />
          <div className="absolute inset-0 z-10 bg-black/60" />
        </div>
        <div className="relative z-20 px-margin-desktop text-center">
          <h1 className="text-display-lg font-display mb-4 tracking-tighter text-white">Our Ministries</h1>
          <p className="mx-auto max-w-2xl text-body-lg text-on-surface/80">
            Discover your place in the family. We are a global community united by faith, dedicated to serving God and each other through diverse spiritual callings.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-container-max-width space-y-32 px-margin-desktop py-24">
        {ministries.map((m) => (
          <RevealOnScroll key={m.title} className="active grid grid-cols-1 items-center gap-16 md:grid-cols-12">
            <div className={`relative group md:col-span-7 ${m.reverse ? "md:order-2" : ""}`}>
              <div className={`absolute -inset-4 rounded-full blur-2xl transition-all duration-500 ${m.glow}`} />
              <div className="glass-card relative aspect-[16/9] overflow-hidden rounded-xl">
                <Image
                  src={m.image}
                  alt={m.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: m.imageFocus }}
                  sizes="(max-width: 768px) 100vw, 58vw"
                />
              </div>
            </div>
            <div className={`space-y-6 md:col-span-5 ${m.reverse ? "md:order-1" : ""}`}>
              <div className="inline-block border border-primary-container bg-primary-container/20 px-3 py-1 text-xs text-label-md uppercase tracking-widest text-primary-fixed">
                {m.badge}
              </div>
              <h2 className="text-headline-lg text-white">{m.title}</h2>
              <p className="text-body-lg leading-relaxed text-on-surface-variant">{m.text}</p>
              <div className="pt-4">
                <Link
                  href="/#contact"
                  className={`inline-block px-8 py-3 text-label-md uppercase tracking-widest transition-all ${m.btn}`}
                >
                  {m.btnLabel}
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <Footer />
    </>
  );
}
