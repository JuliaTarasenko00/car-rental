import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './language/en';
import { uk } from './language/uk';
import { LOCALS } from './constants';

const savedLanguage = localStorage.getItem('i18nextLng') ?? LOCALS.EN;

i18n.use(initReactI18next).init({
  resources: {
    uk: { translation: uk },
    en: { translation: en },
  },
  lng: savedLanguage,
  interpolation: {
    escapeValue: false,
  },
});

function changeLanguage(lng) {
  i18n.changeLanguage(lng);
  localStorage.setItem('i18nextLng', lng);
}

export default i18n;
export { changeLanguage };
