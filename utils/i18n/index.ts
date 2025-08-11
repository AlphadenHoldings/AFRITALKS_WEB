import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import ar from "./locales/ar.json";
import ch from "./locales/ch.json";
import pr from "./locales/pr.json";

// the translations are now imported from JSON files per locale
const resources = {
  en: { translation: en },
  fr: { translation: fr },
  ar: { translation: ar },
  ch: { translation: ch },
  pr: { translation: pr },
};

if (!i18n.isInitialized) {
  // Use language detector on the client; when imported server-side accidentally, it will no-op
  i18n
    .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources,
      fallbackLng: "en",
      supportedLngs: ["en", "fr", "ar", "ch", "pr"],
      nonExplicitSupportedLngs: true,
      lowerCaseLng: true,
      detection: {
        // Prefer stored choice, then browser settings
        order: ["localStorage", "navigator"],
        lookupLocalStorage: "lang",
        caches: ["localStorage"],
      },
      interpolation: {
        escapeValue: false, // react already safes from xss
      },
    });
}

export default i18n;
