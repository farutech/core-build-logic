import { create } from "zustand";
import { persist } from "zustand/middleware";
import { translations, type Locale, type Translations } from "./translations";

interface LocaleState {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

function detectBrowserLocale(): Locale {
  if (typeof window === "undefined") return "en";
  
  const browserLang = navigator.language.toLowerCase();
  
  // Check for Spanish variants
  if (browserLang.startsWith("es")) {
    return "es";
  }
  
  // Default to English
  return "en";
}

export const useLocale = create<LocaleState>()(
  persist(
    (set, get) => ({
      locale: "en", // Will be overridden by browser detection or persisted value
      setLocale: (locale: Locale) => {
        set({ locale, t: translations[locale] });
      },
      t: translations.en,
    }),
    {
      name: "farutech-locale",
      onRehydrateStorage: () => (state) => {
        // If no stored value, detect from browser
        if (state && !localStorage.getItem("farutech-locale")) {
          const detected = detectBrowserLocale();
          state.setLocale(detected);
        } else if (state) {
          // Ensure translations match stored locale
          state.t = translations[state.locale];
        }
      },
    }
  )
);

// Initialize locale on first load (client-side only)
if (typeof window !== "undefined") {
  const stored = localStorage.getItem("farutech-locale");
  if (!stored) {
    const detected = detectBrowserLocale();
    useLocale.getState().setLocale(detected);
  }
}
