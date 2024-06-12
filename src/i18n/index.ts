import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './es'
import en from './en'
import { z } from 'zod';
import { makeZodI18nMap } from 'zod-i18n-map';

i18n
.use(initReactI18next)
  .init({
    lng: 'en',
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
        translation: es
      }
    }
  });

z.setErrorMap(makeZodI18nMap());

export default i18n