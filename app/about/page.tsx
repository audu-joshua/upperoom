import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export const metadata: Metadata = {
  title: "About Us",
};

const leaders = [
  {
    name: "Dr. David Vance",
    role: "Senior Pastor & Founder",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnlcgat9UprRi-ahxJMm6X1z47_tfxYK8kjWjewj_geCEutZz8PGl7lu-Qxx9c5yQhw7gKQGq3cAsyFpnejNH2LBK4MP6dnljx3PbrHl8CHP_pP2TLafkk4TIiaMHji1MXoXv2eGvW8vIJYb3D7WutDjepaRZE4ybArIoLyusmeGJ_r0gGkOtwnkXHFkOpgKZ6ayAI9uvN9CwV_w2IG67luw4difWUm6PeJWAzjYOQAWoP47ZaKPbrow",
  },
  {
    name: "Pastor Sarah Vance",
    role: "Executive Pastor",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmCAZxC-Qfvs6EVARo1Wsk_epHp5isKzh0Rz76JB2N3fClzRmVZyo1WDJDLlELeykSigFdHth53wpz33WvH6Enj1LFuMlFb8tuOReOfFkrjZ2Vk5mSXkJ9e4YCvno1_SWjQrLxSTO8C6pG-T-JFlBb4fLtF0e5Qh1r8tlbHDlzMhtNYfOiYmyti15sWYNKkzvLSr5eIHZndek_FpIsNfHpdFHtNWPviYztuGKI6QD5tLYrkqOww4xuBQ",
  },
  {
    name: "Min. Elijah Thorne",
    role: "Youth & Missions Director",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzOsBXJ9-HdNukcxLn-gPlwSSZDMSRuMK2C2KUdChZ3ILzPaADWkF519NX8DnmOjXyVOHNq4lYTTgAvD2uwIq-Qiy3_ZTU_W7OPGemoUPyMksBldMalO6UVhGp86rIRPpC9q05FDiFaAG-Qv_1MvsINMUAd5nzMnJQcahBm6bt2GQQsP6ZG7NZiTg99sdgsMGpLA3xcrKGcZPiCwEar2RQ8hBeEad2AekERaRC18ESTIgDOR8-r48VAw",
  },
];

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
          <div className="absolute inset-0 z-10 bg-black/60" />
          <div
            className="h-full w-full scale-105 animate-[pulse_10s_ease-in-out_infinite] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA_xnvlGF8VrjyXg0rEoZbG7oE6uuJzocA1JlQ3ZdHRT2TZWIakj85rMDXSFSDmsPT3GD5JBCKrQTAikrChbP6I7rEtlxjbN2vFph-C1J-V8Qmlvdlu-OUkiDwpdnTN1jbdy9utlxNQGDq7bBJxevFYYLumirZVJwUWzmZphmUvK-Z-breDt-uBjo7zKC06ugochvCWKk4lCWymCMi14iAzwWBJiO7G1Nw_pjSShSJx9-O3KR_Id8R8Jg')",
            }}
          />
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
              <div
                className="aspect-[4/5] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAULztY0dZ5zIx5Kp6N2xm7sCv_-s5IgAoPCi6twXzDgsbq97mb6aWDPmnrxioxwAuhJt3qgmDwxSnewXZRAf_CRhBt8NnP9TTwzqgsFgjjC-wD47Im3duz2RMcQxpeBjmBKNIed2GnLFfu6GTpnPeOjq3Xk4H7okWFLeJFLRjYKQzZDP-KVSBOY7YrtNnZSKklq3X-eBo96sfhl4IE1eDNvgmf6_HNy49bXlcZ8KvBsxm6pk6MvDVOaQ')",
                }}
              />
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
                It began with a small gathering in a modest living room, fueled by a single burning desire: to create a space where the Presence of God was the only priority. Guided by Act&apos;s 6:4—&ldquo;But we will give ourselves continually to prayer, and to the ministry of the word&rdquo;—Upper Room Cathedral was birthed from a season of intense fasting and intercession.
              </p>
              <p>
                What started as a handful of faithful believers grew into a global movement. Today, with thousands calling this cathedral home, we remain steadfast in our commitment to the fundamental truths that built our foundations: uncompromised scripture and unceasing prayer.
              </p>
            </div>
            <div className="mt-12 flex gap-12">
              <div>
                <p className="text-headline-md text-on-surface">50k</p>
                <p className="text-label-md uppercase text-on-surface-variant">Global Members</p>
              </div>
              <div>
                <p className="text-headline-md text-on-surface">12</p>
                <p className="text-label-md uppercase text-on-surface-variant">World Missions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-lowest py-24">
        <div className="mx-auto max-w-container-max-width px-margin-desktop">
          <div className="mb-16 text-center">
            <h2 className="text-headline-lg text-on-surface">Core Foundations</h2>
            <p className="text-body-md text-on-surface-variant">The blueprint of our Kingdom impact.</p>
          </div>
          <div className="grid h-auto grid-cols-1 gap-6 md:h-[600px] md:grid-cols-12">
            <div className="glass flex flex-col justify-end p-12 md:col-span-8">
              <span className="material-symbols-outlined mb-6 text-5xl text-primary">visibility</span>
              <h3 className="text-headline-md mb-4 text-on-surface">Our Vision</h3>
              <p className="max-w-xl text-body-lg text-on-surface-variant">
                To raise a generation of fire-baptized believers who carry the atmosphere of the Upper Room into every sphere of human influence, manifesting the Kingdom of God on earth.
              </p>
            </div>
            <div className="flex flex-col justify-start bg-primary-container p-12 md:col-span-4">
              <span className="material-symbols-outlined mb-6 text-5xl text-on-primary" style={{ fontVariationSettings: "'FILL' 1" }}>explore</span>
              <h3 className="text-headline-md mb-4 text-on-primary">Our Mission</h3>
              <p className="text-body-md text-on-primary-container">
                Establishing prayer altars in every home and empowering individuals through the revelatory teaching of the Word to fulfill their divine destiny.
              </p>
            </div>
            <div className="glass border-secondary/20 p-12 md:col-span-4">
              <span className="material-symbols-outlined mb-6 text-5xl text-secondary">architecture</span>
              <h3 className="text-headline-md mb-4 text-on-surface">Strategy</h3>
              <ul className="space-y-4 text-label-md uppercase tracking-wider text-on-surface-variant">
                {["Spiritual Growth", "Social Impact", "Global Missions"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="group relative overflow-hidden md:col-span-8">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCHGazhkQrq0ZGj5tSJdW1FkjPth81BaWF16O5hkobelWk_Vj-HZAqg4GW1JM5ATlKeGJmmJPR_TDyFNIk0tYMcV9NRVUR48kbCFXbrApIr0JtjO4IVVsTTvuTogIgv2Z5-8oRllRDAaFdm6WFHv0YRnwmAjINi-WaPsEwAPfe8oy0OwmtQmgOFzJUzMB19u0O2MB-IOd_dNBXo12BEaiy0nyhJdzSRNJ0j8AeDnajFtbpymgo2kM7AtQ')",
                }}
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-12">
                <h3 className="text-headline-md text-on-surface">Worldwide Influence</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-container-max-width px-margin-desktop py-24">
        <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
          <div className="max-w-2xl">
            <h2 className="text-headline-lg mb-4 text-on-surface">Spiritual Guardians</h2>
            <p className="text-body-lg text-on-surface-variant">
              Led by a team of visionary pioneers dedicated to the ancient paths and future frontiers of faith.
            </p>
          </div>
          <a href="#" className="group flex items-center gap-2 text-label-md uppercase tracking-widest text-secondary">
            Meet the Full Team
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
          </a>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {leaders.map((leader) => (
            <RevealOnScroll key={leader.name} className="active group space-y-6">
              <div className="relative overflow-hidden bg-surface-container">
                <div
                  className="aspect-[3/4] bg-cover bg-center grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  style={{ backgroundImage: `url('${leader.image}')` }}
                />
              </div>
              <div>
                <h4 className="text-headline-md text-on-surface">{leader.name}</h4>
                <p className="mt-1 text-label-md uppercase tracking-widest text-secondary">{leader.role}</p>
              </div>
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
            <button type="button" className="bg-secondary px-10 py-4 text-label-md uppercase tracking-widest text-on-secondary transition-all hover:brightness-110">
              Visit Our Campus
            </button>
            <button type="button" className="border border-outline px-10 py-4 text-label-md uppercase tracking-widest text-on-surface transition-all hover:bg-white/5">
              Join Online Community
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
