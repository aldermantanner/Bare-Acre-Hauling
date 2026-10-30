import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { JunkRemovalPricing } from '../components/JunkRemovalPricing';
import { SEOHead } from '../components/SEOHead';
import { MINIMUM_PRICE_NOTE } from '../lib/contact';

export function PricingPage() {
  return (
    <>
      <SEOHead
        title="Junk Removal Pricing | Bare Acre Hauling | Molalla, OR"
        description="Junk removal pricing for Molalla and Clackamas County, OR. Jobs start at $150. You approve the price before we load."
        canonical="https://www.bareacrehauling.com/pricing"
        keywords="junk removal pricing Molalla, junk removal cost Oregon, haul away pricing Clackamas County, estate cleanout cost, debris removal estimate"
      />

      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white hover:text-gray-200 transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">Junk Removal Pricing</h1>
                <p className="text-gray-200 text-lg mb-3">
                  {MINIMUM_PRICE_NOTE}
                </p>
                <div className="bg-red-600 text-white px-4 py-2 rounded-lg inline-flex items-center gap-2 font-semibold text-sm shadow-lg">
                  <span>10% OFF for Veterans, First Responders & Police</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <JunkRemovalPricing />

      </div>
    </>
  );
}
