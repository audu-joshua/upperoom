import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { getLeaderBySlug, leaders } from "@/lib/leaders";

type LeaderPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return leaders.map((leader) => ({ slug: leader.slug }));
}

export async function generateMetadata({
  params,
}: LeaderPageProps): Promise<Metadata> {
  const { slug } = await params;
  const leader = getLeaderBySlug(slug);
  if (!leader) return { title: "Leadership" };
  return {
    title: leader.name,
    description: leader.shortBio,
  };
}

export default async function LeaderPage({ params }: LeaderPageProps) {
  const { slug } = await params;
  const leader = getLeaderBySlug(slug);
  if (!leader) notFound();

  return (
    <>
      <section className="relative overflow-hidden px-margin-desktop pt-32 pb-16">
        <div className="spiritual-glow pointer-events-none absolute top-0 left-1/2 h-full w-[120%] -translate-x-1/2" />
        <div className="relative mx-auto max-w-container-max-width">
          <Link
            href="/about"
            className="mb-10 inline-flex items-center gap-2 text-label-md uppercase tracking-widest text-secondary transition-colors hover:text-primary"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Back to About
          </Link>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="relative lg:col-span-5">
              <div className="overflow-hidden border border-secondary/40 p-2">
                <div className="relative aspect-[3/4] overflow-hidden bg-surface-container">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    priority
                    className="object-cover"
                    style={{ objectPosition: leader.imageFocus ?? "50% 20%" }}
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="mb-4 text-label-md uppercase tracking-[0.25em] text-secondary">
                Spiritual Guardian
              </p>
              <h1 className="text-display-lg font-display mb-4 leading-tight text-on-surface max-lg:text-headline-lg">
                {leader.name}
              </h1>
              <p className="mb-8 text-title-lg text-primary">{leader.role}</p>
              <p className="mb-10 max-w-2xl text-body-lg text-on-surface-variant">
                {leader.shortBio}
              </p>

              <div className="mb-12 flex flex-wrap gap-4">
                <a
                  href={leader.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-secondary px-6 py-3 text-label-md uppercase tracking-widest text-on-secondary transition-all hover:brightness-110"
                >
                  Follow on Facebook
                  <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                </a>
                {leader.email ? (
                  <a
                    href={`mailto:${leader.email}`}
                    className="inline-flex items-center gap-2 border border-outline px-6 py-3 text-label-md uppercase tracking-widest text-on-surface transition-all hover:bg-white/5"
                  >
                    {leader.email}
                  </a>
                ) : null}
              </div>

              <ul className="mb-12 space-y-3 border-l border-secondary/40 pl-6">
                {leader.highlights.map((item) => (
                  <li key={item} className="text-body-md text-on-surface-variant">
                    {item}
                  </li>
                ))}
              </ul>

              <div className="space-y-6 text-body-lg text-on-surface-variant">
                {leader.bio.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-outline-variant/10 bg-surface-container-low px-margin-desktop py-20">
        <div className="mx-auto flex max-w-container-max-width flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-headline-md mb-3 text-on-surface">Continue exploring</h2>
            <p className="text-body-md text-on-surface-variant">
              Learn more about Upper Room&apos;s vision, mission, and sacred history.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-label-md uppercase tracking-widest text-secondary"
          >
            Return to About Us
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
