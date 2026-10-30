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
  /** Width-descriptor srcset for the WebP candidate, e.g. "/img-640.webp 640w, /img.webp 1280w". */
  webpSrcSet?: string;
  jpgSrcSet?: string;
  sizes?: string;
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
  webpSrcSet,
  jpgSrcSet,
  sizes,
}: PhotoProps) {
  return (
    <picture className={pictureClassName}>
      <source srcSet={webpSrcSet ?? webp} type="image/webp" sizes={sizes} />
      <img
        src={jpg}
        srcSet={jpgSrcSet}
        sizes={jpgSrcSet ? sizes : undefined}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={objectPosition ? { objectPosition } : undefined}
        loading={loading}
        decoding={fetchPriority === 'high' ? 'sync' : 'async'}
        fetchPriority={fetchPriority}
      />
    </picture>
  );
}
