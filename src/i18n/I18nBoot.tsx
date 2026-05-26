import { useEffect } from "react";
import "@/i18n/config";
import { detectAndApplyLanguage } from "@/i18n/config";

/**
 * Mount once at the top of the React tree.
 * SSR renders English; on client mount we switch to the detected language.
 */
export function I18nBoot() {
  useEffect(() => {
    detectAndApplyLanguage();
  }, []);
  return null;
}
