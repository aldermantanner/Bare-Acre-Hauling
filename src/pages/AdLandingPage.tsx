import { useEffect } from 'react';
import { Phone, Shield, MapPin, CheckCircle } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { TESTIMONIALS } from '../data/testimonials';
import { Logo } from '../components/Logo';
import { QuoteActions } from '../components/QuoteActions';
import { PHONE_DISPLAY, PHONE_TEL_HREF } from '../lib/contact';

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

function citySentence(cities: string[]): string {
  if (cities.length < 2) return cities.join('');
  const last = cities[cities.length - 1];
  const lastText = last === 'Salem area' ? 'the Salem area' : last;
  return `${cities.slice(0, -1).join(', ')}, and ${lastText}`;
}

const STEPS = [
  {
    title: 'Text a photo',
    text: 'Send a picture of what needs to go and where you are.',
  },
  {
    title: 'We confirm the price',
    text: 'You approve the quote before we start.',
  },
  {
    title: 'We load it and haul it',
    text: 'The crew takes it away and leaves the space clear.',
  },
];

function useNoIndex() {
  useEffect(() => {
    const existing = document.querySelector('meta[name="robots"]');
    const created = !existing;
    const meta = existing ?? document.createElement('meta');
    if (!existing) {
      meta.setAttribute('name', 'robots');
      document.head.appendChild(meta);
    }
    const previous = existing?.getAttribute('content');
    meta.setAttribute('content', 'noindex, nofollow');

    return () => {
      if (created) {
        meta.remove();
      } else if (previous == null) {
        meta.removeAttribute('content');
      } else {
        meta.setAttribute('content', previous);
      }
    };
  }, []);
}

export function AdLandingPage() {
  useNoIndex();

  return (
    <div className="min-h-screen bg-gray-50 text-slate-800">
      <SEOHead
        title="Junk removal in Clackamas County | Bare Acre Hauling"
        description="Veteran-owned junk removal based in Molalla. Call 503-874-3705 or request a quote. Serving Clackamas County and the Salem area."
        keywords="junk removal Clackamas County, junk removal Molalla, Bare Acre Hauling"
        canonical="https://bareacrehauling.com/ad-landing"
      />

      <header className="bg-slate-800 text-white sticky top-0 z-40 border-b border-slate-700">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <Logo className="h-9 w-9 object-contain flex-shrink-0" alt="" />
            <span className="font-bold text-sm sm:text-base truncate">Bare Acre Hauling</span>
          </div>
          <a
            href={PHONE_TEL_HREF}
            className="flex items-center gap-1.5 text-white font-semibold text-sm sm:text-base whitespace-nowrap hover:text-green-400 transition-colors"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </header>

      <main>
        <section className="bg-slate-800 text-white px-4 pt-8 pb-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
              Junk removal in Clackamas County
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
              {citySentence(CITIES)}.
            </p>
            <div className="mt-6">
              <QuoteActions align="center" />
            </div>
          </div>
        </section>

        <section className="px-4 py-8 bg-white border-b border-gray-200" aria-label="About the business">
          <ul className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <li className="flex flex-col items-center gap-2">
              <Shield className="h-6 w-6 text-slate-700" aria-hidden="true" />
              <span className="font-semibold">Veteran-owned</span>
            </li>
            <li className="flex flex-col items-center gap-2">
              <MapPin className="h-6 w-6 text-slate-700" aria-hidden="true" />
              <span className="font-semibold">Local, based in Molalla</span>
            </li>
            <li className="flex flex-col items-center gap-2">
              <CheckCircle className="h-6 w-6 text-slate-700" aria-hidden="true" />
              <span className="font-semibold">Licensed, Bonded & Insured</span>
            </li>
          </ul>
          <div className="max-w-3xl mx-auto mt-6 space-y-2 text-center text-slate-700">
            <p>First-time customers get 10% off.</p>
            <p>Veterans, first responders, and police get 10% off.</p>
          </div>
        </section>

        <section className="px-4 py-10" aria-labelledby="haul-heading">
          <div className="max-w-3xl mx-auto">
            <h2 id="haul-heading" className="text-2xl font-bold text-center mb-6">What we haul</h2>
            <ul className="grid grid-cols-2 gap-3">
              {HAUL_ITEMS.map((item) => (
                <li key={item} className="bg-white border border-gray-200 rounded-lg px-4 py-3 font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-4 py-10 bg-white" aria-labelledby="steps-heading">
          <div className="max-w-3xl mx-auto">
            <h2 id="steps-heading" className="text-2xl font-bold text-center mb-6">How it works</h2>
            <ol className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {STEPS.map((step, index) => (
                <li key={step.title}>
                  <p className="text-green-700 font-bold mb-1">{index + 1}</p>
                  <h3 className="font-semibold text-lg">{step.title}</h3>
                  <p className="text-gray-600 mt-1">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {TESTIMONIALS.length > 0 && (
          <section className="px-4 py-10" aria-labelledby="reviews-heading">
            <div className="max-w-3xl mx-auto">
              <h2 id="reviews-heading" className="text-2xl font-bold text-center mb-6">Reviews</h2>
              <ul className="space-y-4">
                {TESTIMONIALS.map((review) => (
                  <li key={review.id} className="bg-white border border-gray-200 rounded-lg p-5">
                    <p className="text-slate-700 leading-relaxed">"{review.review_text}"</p>
                    <p className="mt-3 text-sm font-semibold text-slate-600">
                      {review.customer_name}
                      {review.service_label ? ` · ${review.service_label}` : ''}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section className="px-4 py-10 bg-white" aria-labelledby="area-heading">
          <div className="max-w-3xl mx-auto">
            <h2 id="area-heading" className="text-2xl font-bold text-center mb-3">Service area</h2>
            <p className="text-center text-gray-600 mb-6">
              We work from Molalla through Clackamas County and into the Salem area.
            </p>
            <ul className="flex flex-wrap justify-center gap-2">
              {CITIES.map((city) => (
                <li key={city} className="bg-gray-100 text-slate-700 rounded-full px-3 py-1.5 text-sm">
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-slate-800 text-white px-4 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-2">Text a photo for a quote</h2>
            <p className="text-slate-300 mb-6">Questions are fine. We will tell you if we can take the load.</p>
            <QuoteActions align="center" />
          </div>
        </section>
      </main>
    </div>
  );
}
