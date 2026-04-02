// Google Ads conversion tracking utilities

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Google Ads conversion IDs
export const GOOGLE_ADS_ID = 'AW-1033244256';

// Conversion labels
export const CONVERSION_LABELS = {
  /** Fires when a visitor clicks a phone number link on the website */
  WEBSITE_PHONE_CLICK: 'AW-1033244256/4IV5CO3ihpQcEOCc2OwD',
} as const;

/**
 * Track a Google Ads conversion event.
 * Safe to call even if gtag hasn't loaded yet (no-ops gracefully).
 */
export function trackConversion(sendTo: string, callback?: () => void): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: sendTo,
      event_callback: callback,
    });
  } else {
    // gtag not loaded, execute callback directly
    callback?.();
  }
}

/**
 * Track a website phone click conversion.
 * Call this onClick for any phone number link.
 */
export function trackPhoneClick(): void {
  trackConversion(CONVERSION_LABELS.WEBSITE_PHONE_CLICK);
}
