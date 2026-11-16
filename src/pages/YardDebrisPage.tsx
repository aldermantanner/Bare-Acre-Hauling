import { BadgeCheck, Clock, MapPin, Shield } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { AdLandingActions, AdLandingShell } from '../components/AdLandingChrome';
import { Photo } from '../components/Photo';
import { AFTER_HOURS_NOTE, HOURS_LINE, PHONE_DISPLAY } from '../lib/contact';

const HAUL_ITEMS = [
  { title: 'Brush', text: 'Shrubs, hedge trimmings, and brush piles from the yard.' },
  { title: 'Branches', text: 'Limbs and branches stacked by the driveway, fence, or tree line.' },
  { title: 'Leaves and leaf cleanup', text: 'Bagged leaves, or a leaf pile left after cleanup.' },
  { title: 'Green waste', text: 'Plants, vines, and other green waste that will not fit in the yard cart.' },
  { title: 'Yard cleanouts', text: 'A full yard cleanout when the brush, branches, and debris have piled up.' },
];

const CITIES = [
  'Molalla',
  'Mulino',
  'Beavercreek',
  'Canby',
  'Oregon City',
  'Gladstone',
  'Milwaukie',
  'Estacada',
  'Sandy',
  'Wilsonville',
  'West Linn',
  'Happy Valley',
  'Lake Oswego',
];

const TRUST = [
  { icon: Shield, label: 'Veteran-owned' },
  { icon: BadgeCheck, label: 'You approve the price' },
  { icon: MapPin, label: 'Clackamas County' },
  { icon: Clock, label: HOURS_LINE },
];

const STEPS = [
  {
    title: 'Text a photo or call',
    text: 'Send a picture of the brush, branches, leaves, or green waste, and say where you are in Clackamas County.',
  },
  {
    title: 'You approve the price',
    text: 'You approve the price before anything is loaded.',
  },
  {
    title: 'We load it and haul it',
    text: 'The crew loads the yard debris onto the trailer and leaves the spot clear.',
  },
];

export function YardDebrisPage() {
  return (
    <AdLandingShell
      seo={
        <SEOHead
          title="Yard debris removal in Clackamas County | Bare Acre Hauling"
          description={`Yard debris removal in Clackamas County. Brush, branches, leaves, green waste, and yard cleanouts. Veteran-owned in Molalla. Starting at $150. Text a photo or call ${PHONE_DISPLAY}. You approve the price before anything is loaded.`}
          keywords="yard debris removal, yard debris removal Clackamas County, brush removal, branch hauling, leaf cleanup, green waste removal, yard cleanout Molalla, Bare Acre Hauling"
          canonical="https://bareacrehauling.com/yard-debris"
        />
      }
    >
      <section className="bg-slate-900 text-white">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-2 lg:items-stretch">
          <div className="relative h-32 sm:h-72 lg:h-auto lg:min-h-[560px]">
            <Photo
              webp="/towns/yard-debris.webp"
              jpg="/towns/yard-debris.jpg"
              sizes="(min-width: 1024px) 50vw, 100vw"
              alt="Dump trailer loaded with yard debris, brush, branches, and leaves"
              width={1000}
              height={1333}
              pictureClassName="absolute inset-0"
              className="h-full w-full object-cover"
              objectPosition="center 48%"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <div className="flex flex-col justify-center px-4 py-4 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <p className="text-sm font-semibold uppercase tracking-wide text-green-300">
              Veteran-owned · Molalla, OR
            </p>
            <h1 className="mt-2 text-3xl font-bold leading-tight sm:text-5xl">
              Yard debris removal in Clackamas County.
            </h1>
            <p className="mt-2 text-2xl font-extrabold tracking-tight text-amber-300 sm:text-3xl">
              Starting at $150.
            </p>
            <p className="mt-2 text-base font-semibold leading-snug text-slate-100 sm:text-lg">
              Brush, branches, leaves, green waste, and yard cleanouts.
            </p>
            <div className="mt-4">
              <AdLandingActions tone="on-dark" showDiscount showReviews showRequestForm />
            </div>
            <p className="mt-3 text-center text-sm leading-relaxed text-slate-300 sm:text-base">
              Veteran-owned and based in Molalla. You approve the price before anything is loaded. Text a photo of the pile, or call {PHONE_DISPLAY}.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white px-4 py-5" aria-label="Why people call Bare Acre Hauling">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-3 lg:grid-cols-4">
          {TRUST.map((item) => (
            <li key={item.label} className="flex h-full items-center gap-2.5 rounded-xl bg-stone-50 px-3 py-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-800 text-white">
                <item.icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="text-sm font-bold leading-snug text-slate-900">{item.label}</span>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-3 max-w-6xl text-center text-sm text-slate-600">{AFTER_HOURS_NOTE}</p>
      </section>

      <section className="bg-white px-4 py-8" aria-labelledby="haul-heading">
        <div className="mx-auto max-w-3xl">
          <h2 id="haul-heading" className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            Yard debris we haul
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-slate-600">
            Brush, branches, leaf cleanup, green waste, and yard cleanouts in Clackamas County. Starting at $150.
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {HAUL_ITEMS.map((item) => (
              <li key={item.title} className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-4">
                <h3 className="font-bold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <AdLandingActions tone="on-light" />
          </div>
        </div>
      </section>

      <section className="px-4 py-8" aria-labelledby="load-heading">
        <div className="mx-auto max-w-3xl">
          <h2 id="load-heading" className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            A trailer of yard debris
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-slate-600">
            Brush, branches, and leaves loaded for haul-away. You approve the price before anything is loaded.
          </p>
          <Photo
            webp="/towns/yard-debris.webp"
            jpg="/towns/yard-debris.jpg"
            alt="Trailer full of brush, branches, leaves, and other yard debris"
            width={1000}
            height={1333}
            pictureClassName="mx-auto mt-5 block w-full max-w-md overflow-hidden rounded-2xl shadow-lg"
            className="aspect-[3/4] w-full object-cover object-center"
          />
        </div>
      </section>

      <section className="bg-white px-4 py-8" aria-labelledby="steps-heading">
        <div className="mx-auto max-w-3xl">
          <h2 id="steps-heading" className="text-center text-2xl font-bold text-slate-900">
            How a yard debris job goes
          </h2>
          <ol className="mt-5 grid gap-4 sm:grid-cols-3">
            {STEPS.map((step, index) => (
              <li key={step.title} className="rounded-xl bg-stone-50 px-4 py-4">
                <p className="text-sm font-bold text-green-800">{index + 1}</p>
                <h3 className="mt-1 font-bold text-slate-900">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{step.text}</p>
              </li>
            ))}
          </ol>

          <h2 id="area-heading" className="mt-8 text-center text-2xl font-bold text-slate-900">
            Yard debris removal across Clackamas County
          </h2>
          <p className="mt-2 text-center text-slate-600">
            Based in Molalla, serving Clackamas County and nearby towns.
          </p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {CITIES.map((city) => (
              <li key={city} className="rounded-full bg-stone-100 px-3 py-1.5 text-sm font-medium text-slate-700">
                {city}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <AdLandingActions tone="on-light" showReviews />
          </div>
        </div>
      </section>

      <section className="px-4 py-8" aria-labelledby="owner-heading">
        <div className="mx-auto grid max-w-5xl items-center gap-6 rounded-3xl bg-slate-900 p-4 text-white sm:p-8 md:grid-cols-[16rem_1fr] md:gap-10">
          <Photo
            webp="/owner-tanner.webp"
            jpg="/owner-tanner.jpg"
            alt="Tanner Alderman, owner of Bare Acre Hauling, standing by the dump trailer"
            width={600}
            height={1056}
            pictureClassName="mx-auto w-full max-w-[16rem]"
            className="aspect-[3/4] w-full rounded-2xl object-cover object-[center_18%] shadow-lg"
          />
          <div>
            <h2 id="owner-heading" className="text-2xl font-bold sm:text-3xl">
              You deal with Tanner directly.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-200">
              Tanner Alderman owns and runs Bare Acre Hauling, a veteran-owned business based in Molalla. He served in the U.S. military from 2015 to 2021. Text him a photo of the yard debris and he prices the load. You approve the price before anything is loaded.
            </p>
            <div className="mt-5">
              <AdLandingActions tone="on-dark" showDiscount />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-4 py-10 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Text a photo of the yard debris, or call.</h2>
          <p className="mt-2 text-slate-300">
            Starting at $150. Brush, branches, leaves, green waste, and yard cleanouts. You approve the price before anything is loaded.
          </p>
          <div className="mt-5">
            <AdLandingActions tone="on-dark" showDiscount showReviews showRequestForm />
          </div>
        </div>
      </section>
    </AdLandingShell>
  );
}
