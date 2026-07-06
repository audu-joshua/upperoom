import Image from "next/image";
import Link from "next/link";
import { HomeEventsSection } from "@/components/events/HomeEventsSection";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { HomeGallery } from "@/components/home/HomeGallery";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

const mandateCards = [
  {
    icon: "visibility",
    title: "Vision",
    text: "To raise a global army of believers walking in apostolic authority and spiritual excellence.",
  },
  {
    icon: "flag",
    title: "Mission",
    text: "Establishing kingdom principles through rigorous training in the Word and intense prayer.",
  },
  {
    icon: "psychology",
    title: "Strategy",
    text: "Systematic teaching, vibrant community, and strategic global outreach initiatives.",
  },
  {
    icon: "auto_awesome",
    title: "Slogan",
    text: "Upper Room Cathedral: Where the Spirit meets the Word.",
    italic: true,
  },
];

const sermons = [
  {
    image: images.sermons.featured,
    series: "Series: The Fire Within",
    title: "Walking in Apostolic Authority",
    delay: 0,
  },
  {
    image: images.sermons.second,
    series: "Series: Foundations",
    title: "The Mystery of the Spoken Word",
    delay: 100,
  },
  {
    image: images.sermons.featured,
    series: "Mid-Week Service",
    title: "Cultivating a Heart for Prayer",
    delay: 200,
  },
];

const ministries = [
  {
    image: images.ministries.theWord,
    title: "The Word",
    text: "Grounded in scripture — teaching the truth of God with clarity, depth, and apostolic conviction.",
    delay: 0,
  },
  {
    image: images.ministries.worship,
    title: "Worship",
    text: "Leading the congregation into the manifest presence of God through music.",
    delay: 100,
  },
  {
    image: images.ministries.prayer,
    title: "Prayer",
    text: "The engine room of the church, interceding for the nation and the body.",
    delay: 200,
  },
  {
    image: images.ministries.youth,
    title: "Youth",
    text: "Empowering the next generation to lead with Christ-like excellence.",
    delay: 300,
  },
];

const testimonials = [
  { quote: "Coming here changed my perspective on prayer. It's no longer a chore but a daily encounter with the living God.", name: "David Mensah", role: "Media Professional", color: "bg-primary-container", delay: 0 },
  { quote: "The teachings at Upper Room have grounded my faith in ways I never thought possible. I've found a family here.", name: "Sarah Johnson", role: "Software Engineer", color: "bg-secondary-container", delay: 100 },
  { quote: "The youth ministry provided a space where I could grow and be challenged. I am truly established in the kingdom.", name: "Michael Peters", role: "Law Student", color: "bg-outline-variant", delay: 200 },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section id="about" className="relative overflow-hidden px-margin-desktop py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src={images.mandateBg}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="hero-gradient absolute inset-0" />
        </div>
        <div className="relative z-10 mx-auto max-w-container-max-width">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <RevealOnScroll className="active">
              <h2 className="text-headline-lg mb-8 text-primary">Our Sacred Mandate</h2>
              <p className="text-title-lg md:text-headline-md font-display mb-8 italic leading-relaxed text-on-surface">
                &ldquo;We will give ourselves continually to prayer and to the
                ministry of the word. For the salvation and establishment of souls
                in the kingdom.&rdquo;
              </p>
              <div className="mb-12 h-1 w-24 bg-secondary" />
            </RevealOnScroll>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {mandateCards.map((card) => (
                <div key={card.title} className="glass rounded-xl p-8 transition-colors hover:border-primary/50">
                  <span className="material-symbols-outlined mb-4 text-4xl text-secondary">{card.icon}</span>
                  <h3 className="text-title-lg mb-2 text-on-surface">{card.title}</h3>
                  <p className={`text-body-md text-on-surface-variant ${card.italic ? "italic" : ""}`}>{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="sermons" className="bg-surface-container-low px-margin-desktop py-24">
        <div className="mx-auto max-w-container-max-width">
          <RevealOnScroll className="active mb-16 flex items-end justify-between">
            <div>
              <h2 className="text-headline-lg mb-4 text-on-surface">Latest Sermons</h2>
              <p className="text-body-lg text-on-surface-variant">Dive deep into the transformative power of the Word.</p>
            </div>
            <Link href="/sermons" className="group flex items-center gap-2 text-label-md uppercase tracking-widest text-secondary">
              View Archive
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </Link>
          </RevealOnScroll>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sermons.map((sermon) => (
              <RevealOnScroll key={sermon.title} className="active group overflow-hidden rounded-xl glass" delay={sermon.delay}>
                <div className="relative h-64">
                  <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url('${sermon.image}')` }} />
                  <div className="absolute inset-0 flex items-center justify-center bg-primary-container/20 transition-all group-hover:bg-primary-container/0">
                    <span className="material-symbols-outlined text-6xl text-on-surface opacity-0 transition-opacity group-hover:opacity-100">play_circle</span>
                  </div>
                </div>
                <div className="p-8">
                  <span className="mb-2 block text-label-md uppercase tracking-tighter text-primary">{sermon.series}</span>
                  <h3 className="text-title-lg mb-4 text-on-surface">{sermon.title}</h3>
                  <button type="button" className="flex items-center gap-2 text-label-md uppercase tracking-widest text-on-surface transition-colors group-hover:text-secondary">
                    Watch Now <span className="material-symbols-outlined">play_arrow</span>
                  </button>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="ministries" className="relative px-margin-desktop py-24">
        <div className="mx-auto max-w-container-max-width">
          <RevealOnScroll className="active mb-16 text-center">
            <h2 className="text-headline-lg">Our Core Ministries</h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ministries.map((m) => (
              <RevealOnScroll key={m.title} className="active group relative h-96 overflow-hidden rounded-xl" delay={m.delay}>
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${m.image}')` }} />
                <div className="absolute inset-0 bg-black/60 transition-all group-hover:bg-black/40" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <h3 className="text-headline-md mb-2 text-on-surface">{m.title}</h3>
                  <p className="text-body-md text-on-surface-variant opacity-0 transition-opacity duration-500 group-hover:opacity-100">{m.text}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <HomeEventsSection />

      <HomeGallery />

      <section className="relative bg-surface-container-low px-margin-desktop py-24">
        <div className="spiritual-glow absolute right-0 bottom-0 -z-10 h-full w-1/2 rotate-180" />
        <div className="mx-auto max-w-container-max-width">
          <RevealOnScroll className="active mb-16 text-center">
            <h2 className="text-headline-lg">Transformation Stories</h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <RevealOnScroll key={t.name} className="active relative rounded-xl glass p-10" delay={t.delay}>
                <span className="material-symbols-outlined absolute -top-4 -left-4 rounded-full bg-background p-2 text-5xl text-secondary">format_quote</span>
                <p className="text-body-lg mb-8 italic text-on-surface">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className={`h-12 w-12 rounded-full ${t.color}`} />
                  <div>
                    <p className="text-title-lg text-on-surface">{t.name}</p>
                    <p className="text-sm text-on-surface-variant">{t.role}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-margin-desktop py-24">
        <div className="mx-auto grid max-w-container-max-width grid-cols-1 gap-16 lg:grid-cols-2">
          <RevealOnScroll className="active">
            <h2 className="text-headline-lg mb-8 text-on-surface">Join Our Worship</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <span className="material-symbols-outlined text-4xl text-primary">schedule</span>
                <div>
                  <h3 className="text-title-lg mb-2 text-on-surface">Service Times</h3>
                  {site.serviceTimes.map((time) => (
                    <p key={time} className="text-on-surface-variant">
                      {time}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex gap-6">
                <span className="material-symbols-outlined text-4xl text-primary">location_on</span>
                <div>
                  <h3 className="text-title-lg mb-2 text-on-surface">Location</h3>
                  <p className="text-on-surface">{site.name}</p>
                  <p className="text-on-surface-variant">{site.headquarters.line1}</p>
                  <p className="text-on-surface-variant">{site.headquarters.line2}</p>
                  <a
                    href={site.headquarters.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-secondary transition-colors hover:underline"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
              <div className="h-64 overflow-hidden rounded-xl border border-on-surface/10">
                <iframe
                  title="Upper Room Cathedral location map"
                  src={site.headquarters.embedUrl}
                  className="h-full w-full border-0 grayscale-[30%] invert-[90%] contrast-[90%]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="active rounded-xl glass p-12">
            <h3 className="text-headline-md mb-8 text-on-surface">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="mb-2 block text-label-md text-on-surface/60">Full Name</label>
                <input className="w-full border-b-2 border-on-surface/10 bg-surface-container py-3 text-on-surface transition-colors focus:border-primary focus:ring-0" type="text" />
              </div>
              <div>
                <label className="mb-2 block text-label-md text-on-surface/60">Email Address</label>
                <input className="w-full border-b-2 border-on-surface/10 bg-surface-container py-3 text-on-surface transition-colors focus:border-primary focus:ring-0" type="email" />
              </div>
              <div>
                <label className="mb-2 block text-label-md text-on-surface/60">Message</label>
                <textarea className="w-full border-b-2 border-on-surface/10 bg-surface-container py-3 text-on-surface transition-colors focus:border-primary focus:ring-0" rows={4} />
              </div>
              <button type="submit" className="w-full bg-secondary py-4 text-label-md uppercase tracking-widest text-on-secondary transition-all hover:brightness-110">
                Send Message
              </button>
            </form>
          </RevealOnScroll>
        </div>
      </section>

      <Footer />
    </>
  );
}
