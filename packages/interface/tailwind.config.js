/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./layout/**/*.{js,ts,jsx,tsx}", "./screens/**/*.{js,ts,jsx,tsx}"],
	presets: [require("@library/tailwindcss")],
};
