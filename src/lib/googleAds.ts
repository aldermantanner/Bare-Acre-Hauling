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

function isTelHref(href: string | null): boolean {
  if (!href) return false;
  return href.trim().toLowerCase().startsWith('tel:');
}

/**
 * Document click listener. Records a call conversion for tel: links only.
 * Does not call preventDefault, so the phone dialer still opens.
 * sms: links, Book Now, and other anchors are ignored.
 */
export function handleTelLinkClick(event: MouseEvent): void {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const anchor = target.closest('a');
  if (!anchor || !isTelHref(anchor.getAttribute('href'))) return;
  // Beacon survives the browser handing the click off to the phone dialer.
  // Do not preventDefault: delaying tel: until a callback drops the user gesture and can block the call.
  trackConversion(CALL_CLICK_SEND_TO, 'beacon');
}
