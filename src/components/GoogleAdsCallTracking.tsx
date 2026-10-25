import { useEffect } from 'react';
import { handleTelLinkClick } from '../lib/googleAds';

/** One delegated listener for every tel: link, on every route. */
export function GoogleAdsCallTracking() {
  useEffect(() => {
    document.addEventListener('click', handleTelLinkClick);
    return () => document.removeEventListener('click', handleTelLinkClick);
  }, []);

  return null;
}
