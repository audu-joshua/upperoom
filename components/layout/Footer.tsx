import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
  YouTubeIcon,
} from "@/components/icons/SocialIcons";
import { site } from "@/lib/site";

const socialLinks = [
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "YouTube", href: "#", Icon: YouTubeIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface-container-lowest py-20">
      <div className="flex flex-col items-center justify-center space-y-10 px-margin-desktop text-center">
        <div className="mx-auto flex h-16 items-center justify-center md:h-[72px]">
          <Image
            src="/logo.png"
            alt="Upper Room Cathedral Logo"
            width={72}
            height={72}
            className="h-full w-auto rounded-lg object-cover shadow-md ring-1 ring-white/15"
          />
        </div>

        <div className="max-w-xl space-y-1">
          <p className="text-body-md font-medium text-white">{site.name}</p>
          <p className="text-body-md text-white/90">{site.headquarters.line1}</p>
          <p className="text-body-md text-white/80">{site.headquarters.line2}</p>
        </div>

        <p className="max-w-2xl text-body-lg italic text-white/85">
          &ldquo;And they continued stedfastly in the apostles&apos; doctrine and
          fellowship, and in breaking of bread, and in prayers.&rdquo; — Acts
          2:42
        </p>

        <div className="w-full max-w-md space-y-3">
          <p className="text-label-md uppercase tracking-widest text-white/70">
            Stay Connected
          </p>
          <div className="flex gap-2">
            <input
              className="min-w-0 flex-1 rounded-sm border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 transition-colors focus:border-secondary/60 focus:outline-none focus:ring-0"
              placeholder="Your email address"
              type="email"
            />
            <button
              type="button"
              className="cursor-pointer shrink-0 bg-secondary px-7 py-3 text-label-md uppercase tracking-widest text-on-secondary transition-all duration-300 hover:scale-[1.04] hover:brightness-110 hover:shadow-[0_0_20px_rgba(233,195,73,0.35)] active:scale-[0.98]"
            >
              Join
            </button>
          </div>
        </div>

        <div className="flex items-center gap-5">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/15 text-white/80 transition-all duration-300 hover:scale-110 hover:border-secondary/50 hover:text-secondary"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <div className="pt-4 text-sm text-white/60">
          © 2024 Upper Room Cathedral. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
