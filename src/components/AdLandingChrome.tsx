import { useEffect, type ReactNode } from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { QuoteActions } from './QuoteActions';
import { LocalBusinessSchema } from './LocalBusinessSchema';
import {
  DISCOUNT_NOTE,
  GOOGLE_REVIEW_URL,
  HOURS_LINE,
  PHONE_DISPLAY,
  PHONE_SMS_HREF,
  PHONE_TEL_HREF,
} from '../lib/contact';

function useAdLandingNoIndex() {
  useEffect(() => {
    // Prerender serves the homepage shell to later routes, so homepage JSON-LD
    // can sit in <head> until this page mounts. That FAQ claims same-day service.
    for (const id of ['faq-schema', 'service-schema', 'review-schema']) {
      document.getElementById(id)?.remove();
    }

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

function DiscountLine({ tone }: { tone: 'on-dark' | 'on-light' }) {
  return (
    <p
      className={`text-pretty text-center text-sm font-semibold leading-snug sm:text-base ${
        tone === 'on-dark' ? 'text-amber-200' : 'text-slate-800'
      }`}
    >
      {DISCOUNT_NOTE}
    </p>
  );
}

export function GoogleReviewsLink({ tone }: { tone: 'on-dark' | 'on-light' }) {
  return (
    <a
      href={GOOGLE_REVIEW_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-11 items-center justify-center text-center text-sm font-bold underline underline-offset-4 ${
        tone === 'on-dark' ? 'text-white hover:text-amber-200' : 'text-slate-900 hover:text-green-800'
      }`}
    >
      See our Google reviews
    </a>
  );
}

export function AdLandingActions({
  tone,
  showDiscount = false,
  showReviews = false,
  showRequestForm = false,
}: {
  tone: 'on-dark' | 'on-light';
  showDiscount?: boolean;
  showReviews?: boolean;
  showRequestForm?: boolean;
}) {
  let afterPrimary: ReactNode;
  if (showDiscount || showReviews) {
    afterPrimary = (
      <div className="flex flex-col items-center gap-1">
        {showDiscount ? <DiscountLine tone={tone} /> : null}
        {showReviews ? <GoogleReviewsLink tone={tone} /> : null}
      </div>
    );
  }

  return (
    <QuoteActions
      tone={tone}
      align="center"
      equalActions
      showRequestForm={showRequestForm}
      afterPrimary={afterPrimary}
    />
  );
}

function AdLandingHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-700 bg-slate-900 pt-[env(safe-area-inset-top)] text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2">
        <div className="flex min-w-0 items-center gap-2">
          <Logo className="h-8 w-8 flex-shrink-0 object-contain" alt="" />
          <span className="truncate text-sm font-bold sm:text-base">Bare Acre Hauling</span>
        </div>
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={PHONE_SMS_HREF}
            className="inline-flex min-h-11 min-w-[11.5rem] items-center justify-center gap-2 rounded-lg bg-green-800 px-4 text-sm font-bold text-white hover:bg-green-900"
          >
            <MessageSquare className="h-4 w-4" aria-hidden="true" />
            Text a photo
          </a>
          <a
            href={PHONE_TEL_HREF}
            className="inline-flex min-h-11 min-w-[11.5rem] items-center justify-center gap-2 rounded-lg bg-white px-4 text-sm font-bold text-slate-900 hover:bg-slate-100"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </header>
  );
}

function AdLandingFooter() {
  return (
    <footer className="bg-slate-950 px-4 py-8 text-center text-sm text-slate-300">
      <p className="font-semibold text-white">Bare Acre Hauling</p>
      <p className="mt-1">Molalla, OR</p>
      <p className="mt-2">
        <a href={PHONE_TEL_HREF} className="text-lg font-bold text-green-400">
          {PHONE_DISPLAY}
        </a>
      </p>
      <p className="mt-2">Hours: {HOURS_LINE}</p>
      <p className="mt-4">
        <a href="/privacypolicy" className="underline underline-offset-2 hover:text-white">
          Privacy Policy
        </a>
        <span className="mx-2 text-slate-500">|</span>
        <a href="/termsandconditions" className="underline underline-offset-2 hover:text-white">
          Terms & Conditions
        </a>
      </p>
    </footer>
  );
}

export function AdLandingShell({ seo, children }: { seo: ReactNode; children: ReactNode }) {
  useAdLandingNoIndex();

  return (
    <div className="min-h-screen bg-stone-50 text-slate-800">
      <LocalBusinessSchema />
      {seo}
      <AdLandingHeader />
      <main>{children}</main>
      <AdLandingFooter />
    </div>
  );
}
