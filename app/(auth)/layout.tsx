import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={images.loginBg}
          alt=""
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "50% 30%" }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/88" />
        <div className="hero-gradient absolute inset-0 opacity-80" />
        <div className="spiritual-glow pointer-events-none absolute inset-0 opacity-20" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="hidden items-center px-margin-desktop py-6 md:flex">
          <Link
            href="/"
            aria-label="Back to site"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-on-secondary shadow-lg shadow-secondary/25 transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95"
          >
            <span className="material-symbols-outlined text-[22px]">chevron_left</span>
          </Link>
        </header>

        <div className="flex flex-1 items-center px-margin-mobile py-16 md:px-margin-desktop md:pt-0 md:pb-20">
          {children}
        </div>
      </div>
    </div>
  );
}
