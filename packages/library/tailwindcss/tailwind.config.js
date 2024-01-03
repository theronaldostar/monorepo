const extend = require("@library/tailwindcss/theme.config");

/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["**/*.{js,ts,tsx}"],
	darkMode: "media",
	plugins: [require("nativewind/tailwind/css")],
	theme: { extend },
};
