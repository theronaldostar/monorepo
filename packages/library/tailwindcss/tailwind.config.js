const extend = require("./theme.config");

/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["../../interface/**/*.{js,ts,jsx,tsx,mdx}", "**/*.{js,ts,jsx,tsx}"],
	darkMode: "media",
	plugins: [require("nativewind/tailwind/css")],
	presets: [],
	theme: { extend },
};
