import { useEffect } from 'react';
import { handleContactLinkClick } from '../lib/googleAds';

/** One delegated listener for every tel: and sms: link, on every route. */
export function GoogleAdsCallTracking() {
  useEffect(() => {
    document.addEventListener('click', handleContactLinkClick);
    return () => document.removeEventListener('click', handleContactLinkClick);
  }, []);

  return null;
}
