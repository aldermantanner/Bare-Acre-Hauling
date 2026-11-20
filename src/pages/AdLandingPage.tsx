import { BadgeCheck, Clock, MapPin, Shield } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { AdLandingActions, AdLandingShell, CustomerReviews } from '../components/AdLandingChrome';
import { Photo } from '../components/Photo';
import { AD_HOURS_LINE, AFTER_HOURS_NOTE, PHONE_DISPLAY } from '../lib/contact';

const HAUL_ITEMS = [
  'Furniture',
  'Appliances',
  'Hot tubs',
  'Mattresses',
  'Yard debris',
  'Garage and estate cleanouts',
];

const CITIES = [
  'Molalla',
  'Oregon City',
  'Canby',
  'Wilsonville',
  'West Linn',
  'Lake Oswego',
  'Happy Valley',
  'Tigard',
  'Tualatin',
  'Newberg',
  'Salem area',
];

const TRUST = [
  { icon: Shield, label: 'Veteran-owned' },
  { icon: BadgeCheck, label: 'You approve the price' },
  { icon: MapPin, label: 'Local Molalla' },
  { icon: Clock, label: AD_HOURS_LINE },
];

const STEPS = [
  {
    title: 'Text a photo or call',
    text: 'Send a picture of the load, or tell us what needs to go and where you are.',
  },
  {
    title: 'You approve the price',
    text: 'You approve the price before we load.',
  },
  {
    title: 'We load it and haul it',
    text: 'The crew takes it away and leaves the space clear.',
  },
];

export function AdLandingPage() {
  return (
    <AdLandingShell
      seo={
        <SEOHead
          title="Junk removal in Clackamas County | Bare Acre Hauling"
          description={`Veteran-owned junk removal based in Molalla. Starting at $150. Text a photo for a quote, or call ${PHONE_DISPLAY}. You approve the price before we load.`}
          keywords="junk removal Clackamas County, junk removal Molalla, Bare Acre Hauling"
          canonical="https://bareacrehauling.com/ad-landing"
        />
      }
    >
        <section className="bg-slate-900 text-white">
          <div className="mx-auto grid max-w-6xl lg:grid-cols-2 lg:items-stretch">
            <div className="relative h-44 sm:h-72 lg:h-auto lg:min-h-[560px]">
              <Photo
                webp="/crew-loading.webp"
                jpg="/crew-loading.jpg"
                webpSrcSet="/crew-loading-640.webp 640w, /crew-loading.webp 1280w"
                sizes="(min-width: 1024px) 50vw, 100vw"
                alt="Loading a refrigerator, mattress, and furniture onto the trailer"
                width={1280}
                height={853}
                pictureClassName="absolute inset-0"
                className="h-full w-full object-cover object-[center_30%]"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="flex flex-col justify-center px-4 py-5 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <p className="text-sm font-semibold uppercase tracking-wide text-green-300">
                Veteran-owned · Molalla, OR
              </p>
              <h1 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">
                You approve the price before we start.
              </h1>
              <p className="mt-2 text-lg font-semibold leading-snug text-slate-100 sm:text-xl">
                Junk removal in Clackamas County.
              </p>
              <div className="mt-4">
                <AdLandingActions tone="on-dark" hero showDiscount showReviews showRequestForm />
              </div>
              <p className="mt-3 text-center text-sm text-slate-300">
                Veteran-owned and based in Molalla. Jobs start at $150.
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

        <CustomerReviews heading="From a customer in Molalla">
          <AdLandingActions tone="on-light" />
        </CustomerReviews>

        <section className="bg-white px-4 py-8" aria-labelledby="results-heading">
          <div className="mx-auto max-w-5xl">
            <h2 id="results-heading" className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
              A driveway we cleared
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-center text-slate-600">
              You approve the price before we load.
            </p>
            <div className="mt-5 grid h-56 grid-cols-2 gap-2 overflow-hidden rounded-2xl shadow-lg sm:h-80 sm:gap-3">
              <div className="relative overflow-hidden">
                <Photo
                  webp="/before-real.webp"
                  jpg="/before-real.jpg"
                  alt="Driveway covered in junk and debris before removal"
                  width={1200}
                  height={900}
                  pictureClassName="absolute inset-0"
                  className="h-full w-full object-cover object-[center_35%]"
                />
                <span className="absolute left-2 top-2 rounded-md bg-red-700 px-2 py-1 text-xs font-bold uppercase tracking-wide text-white sm:left-3 sm:top-3 sm:px-3 sm:text-sm">
                  Before
                </span>
              </div>
              <div className="relative overflow-hidden">
                <Photo
                  webp="/after.webp"
                  jpg="/after.jpg"
                  alt="Clean cleared driveway after junk removal"
                  width={1050}
                  height={1400}
                  pictureClassName="absolute inset-0"
                  className="h-full w-full object-cover object-center"
                />
                <span className="absolute right-2 top-2 rounded-md bg-green-700 px-2 py-1 text-xs font-bold uppercase tracking-wide text-white sm:right-3 sm:top-3 sm:px-3 sm:text-sm">
                  After
                </span>
              </div>
            </div>
            <div className="mt-5">
              <AdLandingActions tone="on-light" />
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
                Tanner Alderman owns and runs Bare Acre Hauling, a veteran-owned business based in Molalla. He served in the U.S. military from 2015 to 2021. You deal directly with him.
              </p>
              <div className="mt-5">
                <AdLandingActions tone="on-dark" showDiscount />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-8" aria-labelledby="haul-heading">
          <div className="mx-auto max-w-3xl">
            <h2 id="haul-heading" className="text-center text-2xl font-bold text-slate-900">
              How a job goes
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

            <h2 className="mt-8 text-center text-2xl font-bold text-slate-900">What we haul</h2>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {HAUL_ITEMS.map((item) => (
                <li key={item} className="rounded-lg border border-stone-200 bg-white px-3 py-3 text-sm font-semibold text-slate-800">
                  {item}
                </li>
              ))}
            </ul>

            <h2 id="area-heading" className="mt-8 text-center text-2xl font-bold text-slate-900">
              Service area
            </h2>
            <p className="mt-2 text-center text-slate-600">
              From Molalla through Clackamas County and into the Salem area.
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

        <section className="bg-slate-900 px-4 py-10 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">Text a photo or call.</h2>
            <p className="mt-2 text-sm text-slate-300">
              Jobs start at $150. You approve the price before we load.
            </p>
            <div className="mt-5">
              <AdLandingActions tone="on-dark" showDiscount showReviews showRequestForm />
            </div>
          </div>
        </section>
    </AdLandingShell>
  );
}
