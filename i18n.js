import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import en from "./src/locales/en"
import it from "./src/locales/it"

i18n.use(initReactI18next).init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    },
    // language resources
    resources: {
        en,
        it,
    },
})

export default i18n
