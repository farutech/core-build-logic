import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en, es } from "./translations";

export const SUPPORTED_LANGS = ["en", "es"] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

// Initialize synchronously with a deterministic default so SSR + first client
// render match. The client switches language after mount.
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    returnObjects: true,
    react: { useSuspense: false },
  });
}

export function detectAndApplyLanguage() {
  if (typeof window === "undefined") return;
  const stored = window.localStorage.getItem("ft.lang") as Lang | null;
  let lang: Lang = "en";
  if (stored && SUPPORTED_LANGS.includes(stored)) {
    lang = stored;
  } else {
    const nav = (window.navigator.language || "en").slice(0, 2).toLowerCase();
    lang = (SUPPORTED_LANGS as readonly string[]).includes(nav) ? (nav as Lang) : "en";
  }
  if (i18n.language !== lang) {
    void i18n.changeLanguage(lang);
  }
  document.documentElement.lang = lang;
}

export function changeLanguage(lang: Lang) {
  void i18n.changeLanguage(lang);
  if (typeof window !== "undefined") {
    window.localStorage.setItem("ft.lang", lang);
    document.documentElement.lang = lang;
  }
}

export default i18n;
