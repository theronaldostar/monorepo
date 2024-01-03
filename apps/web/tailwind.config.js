/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["../../packages/**/*.{js,ts,tsx}", "**/*.{js,ts,tsx}", "pages/**/*.{js,ts,tsx}"],
	important: "html",
	presets: [require("@library/tailwindcss")],
};
