import Image from 'next/image';

type AccreditationBadgeImageProps = {
  src: string;
  alt: string;
  className?: string;
};

/** Fixed-size accreditation logos to prevent CLS on university pages. */
export default function AccreditationBadgeImage({
  src,
  alt,
  className = 'h-12 sm:h-16 w-12 sm:w-16 object-contain',
}: AccreditationBadgeImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={64}
      height={64}
      loading="lazy"
      sizes="64px"
      className={className}
    />
  );
}
