import { Photo } from './Photo';

const BEFORE = {
  webp: '/work/yard-cleanup-before-1200.webp',
  jpg: '/work/yard-cleanup-before-600.jpg',
  webpSrcSet: '/work/yard-cleanup-before-600.webp 600w, /work/yard-cleanup-before-1200.webp 1200w',
  jpgSrcSet: '/work/yard-cleanup-before-600.jpg 600w, /work/yard-cleanup-before-1200.jpg 1200w',
  width: 1200,
  height: 1600,
  alt: 'Pile of yard debris and scrap wood in front of a white truck and dump trailer',
};

const AFTER = {
  webp: '/work/yard-cleanup-after-1200.webp',
  jpg: '/work/yard-cleanup-after-600.jpg',
  webpSrcSet: '/work/yard-cleanup-after-600.webp 600w, /work/yard-cleanup-after-1200.webp 1200w',
  jpgSrcSet: '/work/yard-cleanup-after-600.jpg 600w, /work/yard-cleanup-after-1200.jpg 1200w',
  width: 1200,
  height: 1600,
  alt: 'Cleared field after a yard debris and scrap wood cleanup, with the trailer at the edge',
};

const GALLERY = [
  {
    webp: '/work/yard-cleanup-shoveling-905.webp',
    jpg: '/work/yard-cleanup-shoveling-453.jpg',
    webpSrcSet: '/work/yard-cleanup-shoveling-453.webp 453w, /work/yard-cleanup-shoveling-905.webp 905w',
    jpgSrcSet: '/work/yard-cleanup-shoveling-453.jpg 453w, /work/yard-cleanup-shoveling-905.jpg 905w',
    width: 905,
    height: 1600,
    alt: 'Crew member shoveling a pile of yard debris and scrap wood beside a dump trailer',
    caption: 'Shoveling the pile',
    position: 'center 42%',
  },
  {
    webp: '/work/yard-cleanup-raking-912.webp',
    jpg: '/work/yard-cleanup-raking-456.jpg',
    webpSrcSet: '/work/yard-cleanup-raking-456.webp 456w, /work/yard-cleanup-raking-912.webp 912w',
    jpgSrcSet: '/work/yard-cleanup-raking-456.jpg 456w, /work/yard-cleanup-raking-912.jpg 912w',
    width: 912,
    height: 1600,
    alt: 'Crew member raking yard debris and scrap wood beside a dump trailer',
    caption: 'Raking the pile',
    position: 'center 40%',
  },
  {
    webp: '/work/yard-cleanup-loading-912.webp',
    jpg: '/work/yard-cleanup-loading-456.jpg',
    webpSrcSet: '/work/yard-cleanup-loading-456.webp 456w, /work/yard-cleanup-loading-912.webp 912w',
    jpgSrcSet: '/work/yard-cleanup-loading-456.jpg 456w, /work/yard-cleanup-loading-912.jpg 912w',
    width: 912,
    height: 1600,
    alt: 'View from inside a dump trailer as a worker carries branches to load',
    caption: 'Loading branches',
    position: 'center 70%',
  },
  {
    webp: '/work/truck-and-trailer-1200.webp',
    jpg: '/work/truck-and-trailer-600.jpg',
    webpSrcSet: '/work/truck-and-trailer-600.webp 600w, /work/truck-and-trailer-1200.webp 1200w',
    jpgSrcSet: '/work/truck-and-trailer-600.jpg 600w, /work/truck-and-trailer-1200.jpg 1200w',
    width: 1200,
    height: 1600,
    alt: 'White Bare Acre Hauling truck hitched to a dump trailer with a junk removal sign',
    caption: 'Truck and trailer',
    position: 'center 45%',
  },
] as const;

type YardCleanupPhotosProps = {
  /** The premade collage. The cleared field is the top half. */
  showCombo?: boolean;
};

export function YardCleanupPhotos({ showCombo = false }: YardCleanupPhotosProps) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2 sm:gap-4">
        <figure>
          <div className="relative overflow-hidden rounded-2xl bg-stone-200 shadow-lg">
            <Photo
              {...BEFORE}
              sizes="(min-width: 1024px) 480px, 50vw"
              pictureClassName="block"
              className="aspect-[3/4] w-full object-cover object-[center_58%]"
            />
            <span className="absolute left-2 top-2 rounded-md bg-red-700 px-2 py-1 text-xs font-bold uppercase tracking-wide text-white sm:left-3 sm:top-3 sm:px-3 sm:text-sm">
              Before
            </span>
          </div>
          <figcaption className="mt-2 text-sm leading-snug text-slate-600">Yard debris and scrap wood</figcaption>
        </figure>
        <figure>
          <div className="relative overflow-hidden rounded-2xl bg-stone-200 shadow-lg">
            <Photo
              {...AFTER}
              sizes="(min-width: 1024px) 480px, 50vw"
              pictureClassName="block"
              className="aspect-[3/4] w-full object-cover object-[center_62%]"
            />
            <span className="absolute right-2 top-2 rounded-md bg-green-800 px-2 py-1 text-xs font-bold uppercase tracking-wide text-white sm:right-3 sm:top-3 sm:px-3 sm:text-sm">
              After
            </span>
          </div>
          <figcaption className="mt-2 text-sm leading-snug text-slate-600">The field after the pile was hauled away</figcaption>
        </figure>
      </div>

      {showCombo && (
        <figure className="mx-auto mt-6 max-w-xl">
          <Photo
            webp="/work/yard-cleanup-combo-1080.webp"
            jpg="/work/yard-cleanup-combo-800.jpg"
            webpSrcSet="/work/yard-cleanup-combo-800.webp 800w, /work/yard-cleanup-combo-1080.webp 1080w"
            jpgSrcSet="/work/yard-cleanup-combo-800.jpg 800w, /work/yard-cleanup-combo-1080.jpg 1080w"
            sizes="(min-width: 768px) 576px, 100vw"
            alt="Yard debris and scrap wood cleanup. The cleared field is on top, and the debris pile with the truck and trailer is below."
            width={1080}
            height={1080}
            pictureClassName="block overflow-hidden rounded-2xl shadow-lg"
            className="h-auto w-full"
          />
          <figcaption className="mt-2 text-sm leading-snug text-slate-600">
            Yard debris and scrap wood cleanup. The cleared field is on top. The pile, truck, and trailer are below.
          </figcaption>
        </figure>
      )}

      <div className="mt-8">
        <h3 className="text-xl font-bold text-slate-800">Recent work</h3>
        <p className="mt-1 text-sm text-slate-600">Yard debris and scrap wood cleanup.</p>
        <ul className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {GALLERY.map((shot) => (
            <li key={shot.webp}>
              <figure>
                <Photo
                  webp={shot.webp}
                  jpg={shot.jpg}
                  webpSrcSet={shot.webpSrcSet}
                  jpgSrcSet={shot.jpgSrcSet}
                  sizes="(min-width: 1024px) 240px, 50vw"
                  alt={shot.alt}
                  width={shot.width}
                  height={shot.height}
                  pictureClassName="block overflow-hidden rounded-xl bg-stone-200"
                  className="aspect-[3/4] w-full object-cover"
                  objectPosition={shot.position}
                />
                <figcaption className="mt-1.5 text-sm leading-snug text-slate-600">{shot.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
