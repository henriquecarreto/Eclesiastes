export const CONFIG = {
  comboPrice: "R$ 27,90",
  firstDayPrice: "R$ 19,90",

  comboCheckoutUrl: "https://pay.wiapy.com/q45k0ZZ3jKv0",
  firstDayCheckoutUrl: "https://pay.wiapy.com/BNptMYXX9RxQ",

  companyName: "Acervo Seguro",
  domain: "acervoseguro.com.br",
  siteUrl: "https://acervoseguro.com.br",
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
  try {
    window.dispatchEvent(new CustomEvent("lp:track", { detail: { name, payload } }));
    const win = window as unknown as { fbq?: (...args: unknown[]) => void };
    if (typeof win.fbq === "function") {
      win.fbq("track", name, payload);
    }
  } catch {
    /* noop */
  }
}
