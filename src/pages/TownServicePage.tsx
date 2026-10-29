import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { SEOHead } from '../components/SEOHead';
import { Photo } from '../components/Photo';
import { QuoteActions } from '../components/QuoteActions';
import { HoursNote } from '../components/HoursNote';
import { TOWN_PAGES, townPath, type TownPage } from '../data/towns';
import { BUSINESS_DAYS, MINIMUM_PRICE_NOTE } from '../lib/contact';

function useTownSchema(town: TownPage) {
  useEffect(() => {
    const id = 'town-service-schema';
    document.getElementById(id)?.remove();
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: town.h1,
      serviceType: 'Junk Removal',
      url: `https://bareacrehauling.com/${town.slug}`,
      areaServed: {
        '@type': 'City',
        name: town.city,
        containedInPlace: { '@type': 'State', name: 'Oregon' },
      },
      provider: {
        '@type': 'LocalBusiness',
        '@id': 'https://bareacrehauling.com',
        name: 'Bare Acre Hauling',
        telephone: '+15038743705',
        url: 'https://bareacrehauling.com',
        image: 'https://bareacrehauling.com/og-image.jpg',
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Molalla',
          addressRegion: 'OR',
          postalCode: '97038',
          addressCountry: 'US',
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [...BUSINESS_DAYS],
          opens: '07:00',
          closes: '20:00',
        },
        areaServed: {
          '@type': 'City',
          name: town.city,
        },
      },
      offers: {
        '@type': 'Offer',
        price: '150',
        priceCurrency: 'USD',
        description: MINIMUM_PRICE_NOTE,
      },
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => {
      document.getElementById(id)?.remove();
    };
  }, [town]);
}

export function TownServicePage({ town }: { town: TownPage }) {
  useTownSchema(town);
  const others = TOWN_PAGES.filter((page) => page.slug !== town.slug);

  return (
    <>
      <SEOHead
        title={town.title}
        description={town.description}
        canonical={`https://bareacrehauling.com/${town.slug}`}
        keywords={`junk removal ${town.city}, junk removal ${town.city} OR, ${town.city} junk hauling, Bare Acre Hauling`}
      />
      <article className="bg-white">
        <div className="bg-slate-800">
          <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
            <div className="relative h-56 sm:h-72 lg:h-auto lg:min-h-[460px]">
              <Photo
                webp={town.hero.webp}
                jpg={town.hero.jpg}
                alt={town.hero.alt}
                width={town.hero.width}
                height={town.hero.height}
                pictureClassName="absolute inset-0"
                className="h-full w-full object-cover object-center"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="px-4 py-8 sm:px-8 lg:py-12">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-green-300">
                Veteran-owned · Based in Molalla
              </p>
              <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">{town.h1}</h1>
              <p className="mt-4 text-base leading-relaxed text-slate-200">{town.lead}</p>
              <p className="mt-4 font-semibold text-white">{MINIMUM_PRICE_NOTE}</p>
              <div className="mt-6">
                <QuoteActions tone="on-dark" />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
          <p className="text-lg leading-relaxed text-slate-700">{town.detail}</p>
          <div className="mt-6">
            <HoursNote />
          </div>
          <p className="mt-8 text-slate-700">
            We also haul in{' '}
            {others.map((page, index) => (
              <span key={page.slug}>
                {index > 0 && (index === others.length - 1 ? ', and ' : ', ')}
                <Link to={townPath(page.slug)} className="font-semibold text-green-700 hover:text-green-800">
                  {page.city}
                </Link>
              </span>
            ))}
            .
          </p>
          <p className="mt-4">
            <Link to="/" className="font-semibold text-slate-700 underline underline-offset-2">
              Bare Acre Hauling home
            </Link>
          </p>
        </div>
      </article>
    </>
  );
}
