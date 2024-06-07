import i18next from 'i18next';
import es from './es'
import en from './en'

i18next
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

const {t, changeLanguage} = i18next

export {
  t, 
  changeLanguage
}
