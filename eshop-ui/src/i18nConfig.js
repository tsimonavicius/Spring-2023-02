import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const translationEn = { language: "English", pName: "Product name", pPrice: "Product price", pDesc: "Product desc", pDate: "Creation date", mHome: "Home", mProducts: "Products", mAbout: "About" };
const translationLt = { language: "Lietuvių", pName: "Pavadinimas", pPrice: "Kaina", pDesc: "Aprašymas", pDate: "Įkėlimo data", mHome: "Pradžia", mProducts: "Produktai", mAbout: "Apie" };

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEn },
    lt: { translation: translationLt },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export { i18n };
