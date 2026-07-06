"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { images } from "@/lib/images";

const slides = images.heroSlides;

const INTERVAL_MS = 6000;

export function HeroSection() {
  const [active, setActive] = useState(0);

  const goTo = useCallback((index: number) => {
    setActive(index);
  }, []);

  const next = useCallback(() => {
    setActive((current) => (current + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <header className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {slides.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== active}
          >
            <Image
              src={src}
              alt=""
              fill
              priority={index === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        ))}
        <div className="hero-gradient absolute inset-0" />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="relative z-10 max-w-4xl px-margin-desktop text-center">
        <h1 className="text-hero-title font-display mb-6 leading-tight text-on-surface md:mb-8">
          &ldquo;We Will Give Ourselves Continually To Prayer And The Ministry Of
          The Word&rdquo;
        </h1>
        <div className="mt-10 flex flex-col items-center justify-center gap-6 md:mt-14 md:flex-row">
          <button
            type="button"
            className="cursor-pointer bg-secondary px-10 py-4 text-label-md uppercase tracking-widest text-on-secondary shadow-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-secondary/25 hover:brightness-110 active:scale-[0.98]"
          >
            Join Us
          </button>
          <Link
            href="/sermons"
            className="cursor-pointer border border-secondary px-10 py-4 text-label-md uppercase tracking-widest text-secondary transition-all duration-300 hover:scale-[1.03] hover:border-secondary/80 hover:bg-secondary/10 hover:shadow-md hover:shadow-secondary/10 active:scale-[0.98]"
          >
            Watch Sermons
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 gap-2.5">
        {slides.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === active
                ? "w-8 bg-secondary"
                : "w-1.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </header>
  );
}
