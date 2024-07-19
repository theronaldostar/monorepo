import extend from "@lib/tailwindcss/theme";
import preset from "nativewind/preset";

/** @type {import("tailwindcss").Config} */
export default {
	content: ["**/*.{js,jsx,ts,tsx}"],
	darkMode: "media",
	plugins: [],
	presets: [preset],
	theme: { extend },
};
