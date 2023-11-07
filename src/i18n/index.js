import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './language/en';
import { uk } from './language/uk';
import { LOCALS } from './constants';

i18n.use(initReactI18next).init({
  resources: {
    uk: { translation: uk },
    en: { translation: en },
  },
  lng: LOCALS.EN,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
