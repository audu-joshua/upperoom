import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export const metadata: Metadata = {
  title: "Ministries",
};

const ministries = [
  {
    badge: "Prayer and the Word",
    title: "The Engine Room",
    text: "At the heart of Upper Room Cathedral is a relentless commitment to intercession. Our Prayer Ministry operates 24/7, standing in the gap for our community and the world, rooted in the foundational truth of Acts 6:4.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDr9sn_IxOsWAlqjuFnmBRNx6BUzJ6tJtczcmOMmx9ISQqbsuwG7MCv2wDfEQHwYOb9B0eYC5GG2MU0y9TTTVJJWnfYGCJHVRhRD8iVFxsGHBoK1V5dtTbDjANXtDaM8FX3aFzj2cOgVsS7vPSGifKVLoGZ6dK1PvWQFPrL2ATr3-52ynxw5mCk1Diz7MexDK_OKXUigwMhdP6tsd6hfBQ7X7ceaDt1eOMovjZwxo3Qk1R75YjvwkOntw",
    glow: "bg-primary-container/20 group-hover:bg-primary-container/30",
    btn: "bg-primary-container text-white hover:brightness-125",
    btnLabel: "Get Involved",
    reverse: false,
  },
  {
    badge: "Divine Presence",
    title: "Atmospheric Worship",
    text: "We believe worship is a supernatural encounter. Our worship ministry creates an atmosphere of awe, blending contemporary energy with timeless reverence to lead the congregation into the very throne room of God.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBT1EzotHEYWQTKs9WZWoPBWiANF2qODXXepqQYIabeLMV0kgtTwBCtAzX4xfmWYmrHK8AVXUImp29NUosGXT60JYRSzP8siO-uhwSxuvznacLoHj6TEtFMgdFvHVFHIDuO69ri55wgOfulRaZmQaK7VwVlaAd30bJK74_CwK70zpcxgVddOPUKwjv123jA8t-Xt9X7wdlLE0ktDRmFXSRLUdHbCys0ONumnZspE4j8b4hMuhLHf3aD7g",
    glow: "bg-secondary/10 group-hover:bg-secondary/20",
    btn: "border border-secondary text-secondary hover:bg-secondary hover:text-on-secondary",
    btnLabel: "Join the Choir",
    reverse: true,
  },
  {
    badge: "Next Generation",
    title: "Upper Room Youth",
    text: "Empowering the leaders of tomorrow today. Our youth ministry provides a safe, vibrant space for teenagers and young adults to explore their faith, find community, and discover their unique purpose in God's kingdom.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkgqhLSdhSZyNWikmZlwUezpW7Z-dWSoo2cb7v6TMfUPe2efF9Im0MSSnUCNcYj3l6eG0kD1XnZOdrJtmMMpSn5yXTsTKSJSH5g1R0ZkJ0gA9ZtIJ_eQFA_LraR6-H3Do9WWD_7AE9HHQWsVkKW3APIKpj0EyS1CQFQih5cHHrtaChnAcF7605gK5CSjLE0rJpriSBtzFjTZXesHq-y2Zz77gBdPsMAW9CEOCWWdz3hyr8sinKE403rw",
    glow: "bg-tertiary/10 group-hover:bg-tertiary/20",
    btn: "bg-primary-container text-white hover:brightness-125",
    btnLabel: "Join a Group",
    reverse: false,
  },
  {
    badge: "Global Impact",
    title: "Mission Outreach",
    text: "Extending the hands of Christ beyond our walls. From local food drives to international mission trips, we are dedicated to transforming lives through compassionate action and the message of hope.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNw-zq1Er8oSbmdKvqLA8F7GKQUg0mzhoSj7kA599tfyDGrHsI1x1cweAvrQE2hNF7o6uDy4pfr8AbqHmIEsV1_OtDyb-xREclt89118mcygCphjQyiqzeQCVnACaZUDx_-5h0StmDHtEYyOSXMbwG5Xg566l_BdSdz5lBsnxO_ld83AkrlB0HHBYnYpkPPTQ4NYQSKDh4XkFKsjSOAfASwmJSsr8Vihjw7lbgeiPcoWGnXzeA9aOMHA",
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
          <div className="absolute inset-0 z-10 bg-black/60" />
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGhJcQGgXrVoxvpFmMhMxD3tTAw-fFHHTBqwrlLCIUMeFC6iETxi_pztHmbEAcGqCgfwfbW3iToYJPtrX_5IXVlw3y7RkePInf3ilNBsF4aPWbS_zAdOrHo3cE3sw8C_A938mKsKMUUpv6UYOopWpYDuw3s2ST0XdiN9663JM93Sue3HiOa43oSIZsfLUCA20vKSU9KBCTdzyL8F2rdf7Atos0eWxr-47iTZWP93Furhi1TDZuvSr6vA"
            alt="Our Ministries"
            fill
            className="object-cover"
            priority
          />
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
              <div className="glass-card relative overflow-hidden rounded-xl">
                <Image src={m.image} alt={m.title} width={800} height={450} className="aspect-[16/9] w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            </div>
            <div className={`space-y-6 md:col-span-5 ${m.reverse ? "md:order-1" : ""}`}>
              <div className="inline-block border border-primary-container bg-primary-container/20 px-3 py-1 text-xs text-label-md uppercase tracking-widest text-primary-fixed">
                {m.badge}
              </div>
              <h2 className="text-headline-lg text-white">{m.title}</h2>
              <p className="text-body-lg leading-relaxed text-on-surface-variant">{m.text}</p>
              <div className="pt-4">
                <button type="button" className={`px-8 py-3 text-label-md uppercase tracking-widest transition-all ${m.btn}`}>
                  {m.btnLabel}
                </button>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <section className="mx-auto max-w-container-max-width px-margin-desktop py-24">
        <div className="glass-card relative overflow-hidden rounded-2xl p-16 text-center">
          <div className="spiritual-glow pointer-events-none absolute inset-0 opacity-30" />
          <div className="relative z-10 space-y-8">
            <h2 className="text-headline-lg text-white">Ready to take the next step?</h2>
            <p className="mx-auto max-w-xl text-body-lg text-on-surface-variant">
              Whether you&apos;re looking for spiritual growth, community, or a chance to serve, there&apos;s a place for you at Upper Room Cathedral.
            </p>
            <div className="flex flex-col items-center justify-center gap-6 pt-4 md:flex-row">
              <div className="w-full rounded-lg bg-gradient-to-r from-secondary via-primary to-secondary p-px md:w-auto">
                <button type="button" className="w-full rounded-[7px] bg-surface px-12 py-4 text-label-md uppercase tracking-widest text-white transition-all hover:bg-transparent">
                  Become a Member
                </button>
              </div>
              <a href="#" className="text-label-md uppercase tracking-widest text-primary underline-offset-8 transition-all hover:underline">
                Browse all ministries
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
