import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GiveButton } from "@/components/giving/GiveButton";
import { Footer } from "@/components/layout/Footer";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { images } from "@/lib/images";
import { spiritualGuardians } from "@/lib/leaders";

export const metadata: Metadata = {
  title: "About Us",
};

const locations = ["Yola Church", "Numan Church", "Abuja Church"];

const beliefs = [
  { title: "The Word", text: "We believe the Bible is the infallible, inspired Word of God, our supreme authority in all matters of faith and life." },
  { title: "The Spirit", text: "We believe in the present-day power and baptism of the Holy Spirit, empowering believers for holy living and supernatural service." },
  { title: "The Church", text: "We believe the local church is the hope of the world, a spiritual family where every member has a vital function." },
  { title: "The Kingdom", text: "We believe in the imminent return of Christ and our responsibility to occupy and influence the earth until He comes." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative flex h-[80vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={images.about.hero}
            alt=""
            fill
            priority
            className="object-cover object-center scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 z-10 bg-black/60" />
        </div>
        <div className="relative z-20 px-margin-desktop text-center">
          <span className="mb-6 block text-label-md uppercase tracking-[0.3em] text-secondary">Est. 1994</span>
          <h1 className="text-display-lg font-display mx-auto mb-8 max-w-4xl leading-tight text-on-surface">
            A Sanctuary for the Spirit, A Beacon for the World
          </h1>
          <p className="mx-auto max-w-2xl text-body-lg text-on-surface-variant">
            Founded on the pillar of Prayer and the Word, Upper Room Cathedral has been a home for the seeker and a lighthouse for the lost for three decades.
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 animate-bounce flex-col items-center">
          <span className="material-symbols-outlined text-secondary">expand_more</span>
        </div>
      </section>

      <section className="relative mx-auto max-w-container-max-width px-margin-desktop py-24">
        <div className="spiritual-glow absolute top-0 left-0 -z-10 h-full w-full" />
        <div className="grid grid-cols-1 items-center gap-20 md:grid-cols-2">
          <div className="relative">
            <div className="border border-secondary/50 p-2">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={images.about.history}
                  alt="Bishop Peter Makanto and Pastor Esther Makanto"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "50% 20%" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="glass absolute -right-8 -bottom-8 hidden p-8 md:block">
              <p className="text-headline-md text-secondary">30+</p>
              <p className="text-label-md uppercase text-on-surface-variant">Years of Ministry</p>
            </div>
          </div>
          <div>
            <h2 className="text-headline-lg mb-8 text-on-surface">Our Sacred History</h2>
            <div className="space-y-6 text-body-lg text-on-surface-variant">
              <p>
                It began with a small gathering in a modest living room, fueled by a single burning desire: to create a space where the Presence of God was the only priority. Guided by Acts 6:4—&ldquo;But we will give ourselves continually to prayer, and to the ministry of the word&rdquo;—Upper Room Cathedral was birthed from a season of intense fasting and intercession.
              </p>
              <p>
                What started as a handful of faithful believers grew into a movement across cities. Today, with congregations calling Upper Room home, we remain steadfast in our commitment to the fundamental truths that built our foundations: uncompromised scripture and unceasing prayer.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-6">
              {locations.map((location) => (
                <div key={location}>
                  <p className="text-headline-md text-on-surface">{location.split(" ")[0]}</p>
                  <p className="text-label-md uppercase text-on-surface-variant">
                    {location.split(" ").slice(1).join(" ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-lowest py-24">
        <div className="mx-auto max-w-container-max-width px-margin-desktop">
          <div className="mb-16 text-center">
            <h2 className="text-headline-lg text-on-surface">Core Foundations</h2>
            <p className="text-body-md text-on-surface-variant">Our vision, mission, strategy, and slogan.</p>
          </div>
          <div className="grid h-auto grid-cols-1 gap-6 md:h-[600px] md:grid-cols-12">
            <div className="glass flex flex-col justify-end p-12 md:col-span-8">
              <span className="material-symbols-outlined mb-6 text-5xl text-primary">visibility</span>
              <h3 className="text-headline-md mb-4 text-on-surface">Our Vision</h3>
              <p className="max-w-xl text-body-lg text-on-surface-variant">
                We will give ourselves continually to prayer and to the ministry of the word. For the salvation and establishment of souls in the kingdom.
              </p>
            </div>
            <div className="flex flex-col justify-start bg-primary-container p-12 md:col-span-4">
              <span className="material-symbols-outlined mb-6 text-5xl text-on-primary" style={{ fontVariationSettings: "'FILL' 1" }}>explore</span>
              <h3 className="text-headline-md mb-4 text-on-primary">Our Mission</h3>
              <p className="text-body-md text-on-primary-container">
                Reaching the world through compassionate prayers, preaching and teaching of the word of God with signs and wonders following with the sole purpose of changing lives and kingdom building.
              </p>
            </div>
            <div className="glass border-secondary/20 p-12 md:col-span-4">
              <span className="material-symbols-outlined mb-6 text-5xl text-secondary">architecture</span>
              <h3 className="text-headline-md mb-4 text-on-surface">Strategy</h3>
              <p className="mb-6 text-body-md text-on-surface-variant">
                To offer quality and excellent service to God as our mark of honor to Him, and also to offer quality and excellent service to mankind in order to change lives into his likeness.
              </p>
              <p className="text-label-md uppercase tracking-wider text-secondary">
                Slogan — We are blessed to be a blessing.
              </p>
            </div>
            <div className="group relative overflow-hidden md:col-span-8">
              <Image
                src={images.about.wordAndPrayer}
                alt="The Word and Prayer"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-12">
                <h3 className="text-headline-md text-on-surface">The Word and Prayer</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-container-max-width px-margin-desktop py-24">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-headline-lg mb-4 text-on-surface">Spiritual Guardians</h2>
          <p className="text-body-lg text-on-surface-variant">
            Led by a team of visionary pioneers dedicated to the ancient paths and future frontiers of faith.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {spiritualGuardians.map((leader, index) => (
            <RevealOnScroll key={`${leader.slug}-${index}`} className="active group space-y-6">
              <Link href={`/leaders/${leader.slug}`} className="block space-y-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50">
                <div className="relative overflow-hidden bg-surface-container">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                      style={{ objectPosition: leader.imageFocus ?? "50% 20%" }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-headline-md text-on-surface transition-colors group-hover:text-primary">
                    {leader.name}
                  </h4>
                  <p className="mt-1 text-label-md uppercase tracking-widest text-secondary">{leader.role}</p>
                  <p className="mt-3 inline-flex items-center gap-1 text-label-md uppercase tracking-widest text-on-surface-variant transition-colors group-hover:text-secondary">
                    View profile
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </p>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="border-t border-outline-variant/10 bg-surface-container-low px-margin-desktop py-24">
        <div className="mx-auto max-w-container-max-width">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
            <div>
              <h2 className="text-headline-lg leading-tight text-on-surface">What We Stand For</h2>
              <p className="mt-6 text-body-md text-on-surface-variant">
                Our theology is anchored in the timeless truths of scripture, interpreted through the lens of God&apos;s unchanging character.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-y-16 gap-x-12 sm:grid-cols-2 md:col-span-2">
              {beliefs.map((b) => (
                <div key={b.title}>
                  <h5 className="text-title-lg mb-3 text-secondary">{b.title}</h5>
                  <p className="text-body-md text-on-surface-variant">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-32">
        <div className="spiritual-glow absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-4xl px-margin-desktop text-center">
          <h2 className="text-display-lg font-display mb-8 text-on-surface">Join the Movement</h2>
          <p className="mb-12 text-body-lg text-on-surface-variant">
            Whether you&apos;re down the street or across the globe, there is a place for you in the Upper Room. Experience the fire today.
          </p>
          <div className="flex flex-col justify-center gap-6 sm:flex-row">
            <GiveButton className="bg-secondary px-10 py-4 text-label-md uppercase tracking-widest text-on-secondary transition-all hover:brightness-110">
              Give
            </GiveButton>
            <Link href="/events" className="border border-outline px-10 py-4 text-label-md uppercase tracking-widest text-on-surface transition-all hover:bg-white/5">
              See Upcoming Events
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
