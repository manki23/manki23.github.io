import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import moment from "moment";

import TRANSLATIONS_FR from "./fr/translations";
import TRANSLATIONS_EN from "./en/translations";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: TRANSLATIONS_EN,
      },
      fr: {
        translation: TRANSLATIONS_FR,
      },
    },
    interpolation: {
      format: (value, format, lng) => {
        if (value instanceof Date) return moment(value).format(format);
        if (typeof value === "number") return new Intl.NumberFormat().format(value);
        return value;
      },
    },
  });
