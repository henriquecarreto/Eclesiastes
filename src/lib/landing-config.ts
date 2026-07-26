export const CONFIG = {
  comboPrice: "R$ 27,90",
  firstDayPrice: "R$ 19,90",

  comboCheckoutUrl: "",
  firstDayCheckoutUrl: "",

  companyName: "Acervo Seguro",
  supportEmail: "aprovavisual@gmail.com",
  supportHours: "",

  editorialClosingDate: "",

  termsUrl: "",
  privacyUrl: "",
  refundUrl: "",

  showTestimonials: false,
  showBonuses: false,
  showGuarantee: false,
  showEditorialDate: false,
  showFirstDayOffer: true,
  showStickyMobileCta: true,
} as const;

export type ConfigKey = keyof typeof CONFIG;

export function trackEvent(name: string, payload?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  // Placeholder — no fake pixel/analytics ids. Emit CustomEvent for future wiring.
  try {
    window.dispatchEvent(new CustomEvent("lp:track", { detail: { name, payload } }));
  } catch {
    /* noop */
  }
}
