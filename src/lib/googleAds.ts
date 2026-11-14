const JOBBER_REQUEST_SEND_TO = 'AW-18481474642/LIrICOb41qgdENLY0-xE';
const CALL_CLICK_SEND_TO = 'AW-18481474642/9kPMCOn41qgdENLY0-xE';
const JOBBER_REQUEST_SESSION_KEY = 'bah-jobber-request-conversion';

let jobberRequestQueued = false;

function readSessionFlag(key: string): boolean {
  try {
    return sessionStorage.getItem(key) === '1';
  } catch {
    return false;
  }
}

function writeSessionFlag(key: string): void {
  try {
    sessionStorage.setItem(key, '1');
  } catch {
    // Private mode can block storage. The in-memory guard still covers this page load.
  }
}

function trackConversion(sendTo: string, transportType?: 'beacon'): boolean {
  const gtag = window.gtag;
  if (typeof gtag !== 'function') return false;
  // Value and currency stay on the conversion action in Google Ads.
  const payload: { send_to: string; transport_type?: 'beacon' } = { send_to: sendTo };
  if (transportType) payload.transport_type = transportType;
  gtag('event', 'conversion', payload);
  return true;
}

/** Fires the Jobber request conversion at most once per browser tab session. */
export function trackJobberRequestSubmitted(): boolean {
  if (jobberRequestQueued || readSessionFlag(JOBBER_REQUEST_SESSION_KEY)) {
    jobberRequestQueued = true;
    return false;
  }

  jobberRequestQueued = true;
  const sent = trackConversion(JOBBER_REQUEST_SEND_TO);
  if (sent) writeSessionFlag(JOBBER_REQUEST_SESSION_KEY);
  return sent;
}

function hrefScheme(href: string | null): string | null {
  if (!href) return null;
  const trimmed = href.trim().toLowerCase();
  const colon = trimmed.indexOf(':');
  if (colon <= 0) return null;
  return trimmed.slice(0, colon);
}

/**
 * Document click listener. Records a conversion when someone taps a tel: or sms: link.
 * Both use AW-18481474642/9kPMCOn41qgdENLY0-xE. This repo has no separate text-click label.
 * Does not call preventDefault, so the phone or messages app still opens.
 */
export function handleContactLinkClick(event: MouseEvent): void {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const anchor = target.closest('a');
  if (!anchor) return;
  const scheme = hrefScheme(anchor.getAttribute('href'));
  if (scheme !== 'tel' && scheme !== 'sms') return;
  // Beacon survives the browser handing the click off to the phone or messages app.
  // Do not preventDefault: delaying tel: or sms: until a callback drops the user gesture.
  trackConversion(CALL_CLICK_SEND_TO, 'beacon');
}
