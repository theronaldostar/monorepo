/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["**/*.{js,ts,tsx}", "app/**/*.{js,ts,tsx}", "../../packages/**/*.{js,ts,tsx}"],
	presets: [require("@library/tailwindcss")],
};
