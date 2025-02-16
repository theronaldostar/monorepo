import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { en_US, pt_BR } from "@config/i18n/locales";

i18n.use(initReactI18next).init({
	lng: "en",
	resources: {
		en: { translation: en_US },
		pt: { translation: pt_BR },
	},
	react: { useSuspense: false },
	interpolation: { escapeValue: false },
});

export default i18n;
