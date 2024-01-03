/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["**/*.{js,ts,tsx}", "components/**/*.{js,ts,tsx}", "layout/**/*.{js,ts,tsx}", "screens/**/*.{js,ts,tsx}"],
	presets: [require("@library/tailwindcss")],
};
