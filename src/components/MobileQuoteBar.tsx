import { useEffect, useRef, type RefObject } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';
import { MessageSquare, Phone } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_SMS_HREF, PHONE_TEL_HREF } from '../lib/contact';

/**
 * Lift the bar above iOS Safari's toolbar. bottom: 0 sits on the layout
 * viewport, which the toolbar covers while scrolling. The visual viewport
 * gap is that white browser chrome.
 */
function useAboveMobileChrome(navRef: RefObject<HTMLElement | null>, active: boolean) {
  useEffect(() => {
    const nav = navRef.current;
    const viewport = window.visualViewport;
    if (!active || !nav || !viewport) return;

    let frame = 0;
    const sync = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const covered = window.innerHeight - viewport.height - viewport.offsetTop;
        nav.style.bottom = `${Math.max(0, Math.round(covered))}px`;
      });
    };

    sync();
    viewport.addEventListener('resize', sync);
    viewport.addEventListener('scroll', sync);
    return () => {
      cancelAnimationFrame(frame);
      viewport.removeEventListener('resize', sync);
      viewport.removeEventListener('scroll', sync);
      nav.style.bottom = '';
    };
  }, [navRef, active]);
}

/** Sticky Call + Text bar on small screens. Hidden on desktop and in the admin portal. */
export function MobileQuoteBar() {
  const { pathname } = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const hidden = pathname.startsWith('/admin');
  useAboveMobileChrome(navRef, !hidden);
  if (hidden) return null;

  // Netlify serves this route as /ad-landing/ (trailing slash). Treat both as the ads page.
  const callFirst = pathname.replace(/\/+$/, '') === '/ad-landing';

  const bar = (
      <nav
        ref={navRef}
        className="fixed inset-x-0 bottom-0 z-[100] isolate border-t border-slate-200 bg-white pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_16px_rgba(0,0,0,0.08)] lg:hidden"
        aria-label="Call or text Bare Acre Hauling"
      >
        {callFirst ? (
          <div className="grid grid-cols-2 gap-2 p-2">
            <a
              href={PHONE_SMS_HREF}
              className="inline-flex min-h-[4.25rem] flex-col items-center justify-center gap-0.5 rounded-lg bg-green-800 px-2 py-2 text-center text-sm font-bold leading-tight text-white"
            >
              <span className="inline-flex items-center gap-1.5">
                <MessageSquare className="h-5 w-5 shrink-0" aria-hidden="true" />
                Text a photo
              </span>
              <span className="text-xs font-semibold">for a quote</span>
            </a>
            <a
              href={PHONE_TEL_HREF}
              className="inline-flex min-h-[4.25rem] flex-col items-center justify-center gap-0.5 rounded-lg bg-slate-800 px-2 py-2 text-center text-sm font-bold leading-tight text-white"
            >
              <span className="inline-flex items-center gap-1.5">
                <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
                Call
              </span>
              <span className="text-xs font-semibold">{PHONE_DISPLAY}</span>
            </a>
          </div>
        ) : (
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
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-green-800 px-3 py-3 text-base font-bold text-white"
            >
              <MessageSquare className="h-5 w-5 shrink-0" aria-hidden="true" />
              Text a photo
            </a>
          </div>
        )}
      </nav>
  );

  return (
    <>
      <div
        className={
          callFirst
            ? 'h-[calc(5.25rem+env(safe-area-inset-bottom))] lg:hidden'
            : 'h-[calc(4.5rem+env(safe-area-inset-bottom))] lg:hidden'
        }
        aria-hidden="true"
      />
      {createPortal(bar, document.body)}
    </>
  );
}
