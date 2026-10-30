import { useLocation } from 'react-router-dom';
import { MessageSquare, Phone } from 'lucide-react';
import { PHONE_SMS_HREF, PHONE_TEL_HREF } from '../lib/contact';

/** Sticky Call + Text bar on small screens. Hidden on desktop and in the admin portal. */
export function MobileQuoteBar() {
  const { pathname } = useLocation();
  if (pathname.startsWith('/admin')) return null;

  return (
    <>
      <div
        className="h-[calc(9rem+env(safe-area-inset-bottom))] lg:hidden"
        aria-hidden="true"
      />
      <nav
        className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_16px_rgba(0,0,0,0.08)] lg:hidden"
        aria-label="Call or text Bare Acre Hauling"
      >
        <div className="grid grid-cols-2 gap-2 p-2">
          <a
            href={PHONE_TEL_HREF}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-slate-800 px-3 py-3 text-base font-bold text-white"
          >
            <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
            Call
          </a>
          <a
            href={PHONE_SMS_HREF}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-green-600 px-3 py-3 text-base font-bold text-white"
          >
            <MessageSquare className="h-5 w-5 shrink-0" aria-hidden="true" />
            Text a photo
          </a>
        </div>
      </nav>
    </>
  );
}
