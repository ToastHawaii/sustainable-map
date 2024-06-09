import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import moment from "moment";
import { initReactI18next } from "react-i18next";
import * as en from "./locales/en.json";
import * as oapEn from "../osm-app-component/locales/en.json";

import * as de from "./locales/de.json";
import * as oapDe from "../osm-app-component/locales/de.json";
import * as es from "./locales/es.json";
import * as oapEs from "../osm-app-component/locales/es.json";

i18next.on("languageChanged", function (lng) {
  document.documentElement.setAttribute("lang", lng);
  moment.locale(lng);
});

i18next
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    detection: {
      lookupQuerystring: "lang",
    },
    fallbackLng: "en",

    resources: {
      en: { translation: { ...en, ...oapEn } },
      de: { translation: { ...de, ...oapDe } },
      es: { translation: { ...es, ...oapEs } },
    },

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    react: {
      useSuspense: false,
    },

    nsSeparator: "#",
    pluralSeparator: "%",
  });
