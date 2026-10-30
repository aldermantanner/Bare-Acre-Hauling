import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { QuoteActions } from '../components/QuoteActions';
import { HoursNote } from '../components/HoursNote';
import { TOWN_GROUPS, TOWN_PAGES, townPath } from '../data/towns';
import { MINIMUM_PRICE_NOTE } from '../lib/contact';

export function ServiceAreasPage() {
  return (
    <>
      <SEOHead
        title="Service Areas | Junk Removal from Molalla | Bare Acre Hauling"
        description="Bare Acre Hauling is based in Molalla, OR and hauls junk in nearby Clackamas, Marion, and Yamhill County towns. Jobs start at $150. Text a photo to 503-874-3705."
        canonical="https://bareacrehauling.com/service-areas"
        keywords="junk removal Molalla, junk removal service area, Clackamas County junk removal, Marion County junk removal"
      />
      <div className="bg-slate-800 px-4 py-12 text-white sm:px-6">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-green-300">Based in Molalla</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Towns we haul in</h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-200">
            We're based in Molalla and we haul in the towns below. Text a photo of what you've got and we'll send a price.
          </p>
          <p className="mt-4 font-semibold">{MINIMUM_PRICE_NOTE}</p>
          <div className="mt-6">
            <QuoteActions tone="on-dark" />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        {TOWN_GROUPS.map((group) => {
          const towns = TOWN_PAGES.filter((town) => town.group === group.id);
          return (
            <section key={group.id} className="mb-10">
              <h2 className="text-2xl font-bold text-slate-800">{group.title}</h2>
              <p className="mt-1 text-slate-600">{group.note}</p>
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {towns.map((town) => (
                  <li key={town.slug}>
                    <Link
                      to={townPath(town.slug)}
                      className="flex min-h-11 items-center rounded-lg border border-gray-200 bg-white px-4 py-3 font-semibold text-slate-800 hover:border-green-600 hover:text-green-700"
                    >
                      Junk removal in {town.city}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
        <HoursNote />
        <p className="mt-6">
          <Link to="/pricing" className="font-semibold text-slate-700 underline underline-offset-2">
            See the pricing calculator
          </Link>
        </p>
      </div>
    </>
  );
}
