type PhotoProps = {
  webp: string;
  jpg: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  pictureClassName?: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
  objectPosition?: string;
};

export function Photo({
  webp,
  jpg,
  alt,
  width,
  height,
  className,
  pictureClassName,
  loading = 'lazy',
  fetchPriority = 'auto',
  objectPosition,
}: PhotoProps) {
  return (
    <picture className={pictureClassName}>
      <source srcSet={webp} type="image/webp" />
      <img
        src={jpg}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={objectPosition ? { objectPosition } : undefined}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
      />
    </picture>
  );
}
