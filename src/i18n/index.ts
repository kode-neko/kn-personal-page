import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import {z} from 'zod';
import { makeZodI18nMap } from 'zod-i18n-map';
import es from './es'
import en from './en'
import zodEs from "zod-i18n-map/locales/es/zod.json";

const langBrowser = window.navigator.language;

i18n
.use(initReactI18next)
  .init({
    lng: [/es/, /en/].some(rx => rx.test(langBrowser)) ? langBrowser : 'en',
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: en
      },
      es: {
        translation: es,
        zod: zodEs
      }
    }
  });

z.setErrorMap(makeZodI18nMap());

export default i18n