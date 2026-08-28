type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, params?: AnalyticsParams) => void;
  }
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, params);
}

export function trackCtaClick(ctaName: string, section: string) {
  trackEvent("cta_click", {
    cta_name: ctaName,
    section,
  });
}

export function trackOnboardingStart(section: string, method: "phone" | "whatsapp") {
  trackEvent("onboarding_start", {
    section,
    method,
  });
}
