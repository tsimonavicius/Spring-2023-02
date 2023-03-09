import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const translationEn = { pName: "Product name", pPrice: "Product price", pDesc: "Product desc", pDate: "Creation date" };
const translationLt = { pName: "Pavadinimas", pPrice: "Kaina", pDesc: "Aprašymas", pDate: "Įkėlimo data" };

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
