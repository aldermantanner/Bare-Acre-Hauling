import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { trackJobberRequestSubmitted } from '../lib/googleAds';

const ROBOTS_CONTENT = 'noindex, nofollow';

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
    meta.setAttribute('content', ROBOTS_CONTENT);

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

export function ThankYouPage() {
  useNoIndex();

  useEffect(() => {
    trackJobberRequestSubmitted();
  }, []);

  return (
    <div className="bg-white">
      <SEOHead
        title="Request received | Bare Acre Hauling"
        description="We received your request and will reach out shortly to confirm."
        keywords="Bare Acre Hauling"
      />
      <div className="bg-slate-800 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Request received</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-lg text-gray-600 leading-relaxed">
          We'll reach out shortly to confirm. Questions?{' '}
          <a href="tel:503-874-3705" className="text-green-600 hover:text-green-700 font-medium">
            Call
          </a>{' '}
          or{' '}
          <a href="sms:503-874-3705" className="text-green-600 hover:text-green-700 font-medium">
            text
          </a>{' '}
          <a href="tel:503-874-3705" className="text-green-600 hover:text-green-700 font-medium">
            503-874-3705
          </a>
          .
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors mt-10"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
