import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './en.json'
import ro from './ro.json'
import ru from './ru.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    showSupportNotice: false,
    resources: {
      en: { translation: en },
      ro: { translation: ro },
      ru: { translation: ru },
    },
    fallbackLng: 'ro',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
  })

export default i18n
