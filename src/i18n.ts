import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import pl from "./translations/pl.json";
import en from "./translations/en.json";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    debug: false,
    // resources: resources,
    resources: {
      pl: {
        translation: pl,
      },
      en: {
        translation: en,
      },
    },
    fallbackLng: "en",
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
