import Image from "next/image";
import Link from "next/link";

type BrandMarkProps = {
  showText?: boolean;
  onNavigate?: () => void;
  logoClassName?: string;
};

export function BrandMark({
  showText = true,
  onNavigate,
  logoClassName = "h-10 w-10 md:h-11 md:w-11",
}: BrandMarkProps) {
  return (
    <Link
      href="/"
      onClick={onNavigate}
      className="group flex items-center gap-2.5"
    >
      <Image
        src="/logo.png"
        alt="Upper Room Cathedral"
        width={44}
        height={44}
        className={`${logoClassName} shrink-0 rounded-md object-cover shadow-md ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-[1.03]`}
        priority
      />
      {showText && (
        <div className="hidden flex-col justify-center leading-none md:flex">
          <span className="font-display text-[15px] font-semibold tracking-tight text-white">
            Upper Room
          </span>
          <span className="mt-0.5 font-display text-[12px] tracking-wide text-white/80">
            Cathedral
          </span>
        </div>
      )}
    </Link>
  );
}
