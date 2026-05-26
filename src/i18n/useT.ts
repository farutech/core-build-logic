// Strongly-typed helper around react-i18next.
// Use: const t = useT(); t.nav.capabilities
import { useTranslation } from "react-i18next";
import type { Resources } from "./translations";
import { en, es } from "./translations";
import { changeLanguage as _changeLanguage, type Lang } from "./config";

export function useT(): Resources {
  const { i18n } = useTranslation();
  return (i18n.language === "es" ? es : en) as Resources;
}

export function useLang(): { lang: Lang; setLang: (l: Lang) => void } {
  const { i18n } = useTranslation();
  return {
    lang: (i18n.language === "es" ? "es" : "en") as Lang,
    setLang: _changeLanguage,
  };
}
