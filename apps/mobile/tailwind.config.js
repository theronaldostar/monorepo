/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}", "../../packages/**/*.{js,jsx,ts,tsx}"],
	presets: [require("@library/tailwindcss")],
};
