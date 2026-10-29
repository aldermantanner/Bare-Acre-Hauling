type LogoProps = {
  className?: string;
  alt?: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
};

/** Header/footer mark. WebP is about 33 KB; PNG is the fallback. */
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
        fetchPriority={fetchPriority}
      />
    </picture>
  );
}
