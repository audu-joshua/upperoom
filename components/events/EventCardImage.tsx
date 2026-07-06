import Image from "next/image";

/** Balanced default for mixed church event uploads — between top and center */
export const DEFAULT_EVENT_IMAGE_FOCUS = "50% 30%";

type EventCardImageProps = {
  src: string;
  alt: string;
  /** Card thumbnail vs modal hero */
  variant?: "card" | "modal";
  /** CSS object-position, e.g. "50% 30%" */
  focus?: string;
  className?: string;
};

const variantClasses = {
  card: "aspect-[3/2] min-h-[140px]",
  modal: "h-56 md:h-72",
} as const;

export function EventCardImage({
  src,
  alt,
  variant = "card",
  focus = DEFAULT_EVENT_IMAGE_FOCUS,
  className = "",
}: EventCardImageProps) {
  const objectPosition = focus;

  return (
    <div
      className={`relative w-full overflow-hidden bg-surface-container-high ${variantClasses[variant]} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        style={{ objectPosition }}
        sizes={
          variant === "card"
            ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            : "(max-width: 768px) 100vw, 672px"
        }
      />
    </div>
  );
}
