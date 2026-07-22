import Image from "next/image";

/**
 * Default for mixed sermon uploads (portraits + stage shots).
 * Biased toward the upper frame so faces/heads stay visible when cropped.
 * Override per sermon via `focus` when a specific crop is needed.
 */
export const DEFAULT_SERMON_IMAGE_FOCUS = "50% 20%";

type SermonCardImageProps = {
  src: string;
  alt: string;
  /** CSS object-position, e.g. "50% 15%" — for future CMS uploads */
  focus?: string;
  className?: string;
};

export function SermonCardImage({
  src,
  alt,
  focus = DEFAULT_SERMON_IMAGE_FOCUS,
  className = "",
}: SermonCardImageProps) {
  return (
    <div
      className={`relative h-64 w-full overflow-hidden bg-surface-container-high ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        style={{ objectPosition: focus }}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>
  );
}
