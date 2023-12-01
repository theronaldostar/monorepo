/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,jsx,ts,tsx}", "../../packages/**/*.{js,jsx,ts,tsx}"],
	important: "html",
	presets: [require("@library/tailwindcss")],
};
