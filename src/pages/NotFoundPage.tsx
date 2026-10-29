import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PHONE_DISPLAY, PHONE_TEL_HREF } from '../lib/contact';

export function NotFoundPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Page not found | Bare Acre Hauling';
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    return () => {
      document.title = previousTitle;
      meta.remove();
    };
  }, []);

  return (
    <div className="bg-slate-800 px-4 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl font-bold sm:text-4xl">Page not found</h1>
        <p className="mt-4 text-lg text-slate-200">
          That address is not a page on this site. Head home, or call us in Molalla.
        </p>
        <p className="mt-6">
          <a href={PHONE_TEL_HREF} className="text-xl font-bold text-green-300">
            {PHONE_DISPLAY}
          </a>
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-lg bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
