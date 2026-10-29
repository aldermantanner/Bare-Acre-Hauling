import { SEOHead } from '../components/SEOHead';
import { QuoteActions } from '../components/QuoteActions';
import { HoursNote } from '../components/HoursNote';
import { MINIMUM_PRICE_NOTE } from '../lib/contact';

export function BookingPage() {
  return (
    <>
      <SEOHead
        title="Get a Junk Removal Quote | Bare Acre Hauling"
        description="Text a photo for a junk removal quote in Molalla and Clackamas County. Jobs start at $150. You approve the price before we load. Call 503-874-3705."
        canonical="https://bareacrehauling.com/booking"
      />
      <div className="bg-slate-800 px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-xl text-center text-white">
          <h1 className="text-3xl font-bold sm:text-4xl">Text a photo for a quote</h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-200">
            Send a picture of what you need hauled. We'll reply the same day, usually within an hour, with a price you approve before we load.
          </p>
          <div className="mt-4 flex justify-center">
            <HoursNote tone="on-dark" />
          </div>
          <p className="mt-4 text-lg font-semibold text-green-300">{MINIMUM_PRICE_NOTE}</p>
          <div className="mt-8">
            <QuoteActions tone="on-dark" align="center" />
          </div>
        </div>
      </div>
    </>
  );
}
