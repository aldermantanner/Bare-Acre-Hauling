type LogoProps = {
  className?: string;
  alt?: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
};

/**
 * Header and footer mark.
 * logo.webp / logo.png are the circular badge with transparent corners.
 * logo-original.webp / logo-original.png keep the previous square files.
 */
export function Logo({
  className,
  alt = 'Bare Acre Hauling',
  loading = 'eager',
  fetchPriority = 'auto',
}: LogoProps) {
  return (
    <picture className="inline-flex shrink-0">
      <source srcSet="/logo.webp" type="image/webp" />
      <img
        src="/logo.png"
        alt={alt}
        width={320}
        height={320}
        className={className}
        loading={loading}
        decoding="async"
        {...(fetchPriority !== 'auto'
          ? ({ fetchpriority: fetchPriority } as { fetchpriority: 'high' | 'low' })
          : {})}
      />
    </picture>
  );
}
