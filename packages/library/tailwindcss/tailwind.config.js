const extend = require("./theme.config");

/** @type {import("tailwindcss").Config} */
module.exports = {
	content: [
		"../../interface/**/*.{js,ts,jsx,tsx,mdx}",
		"**/*.{js,ts,jsx,tsx}"
	],
	darkMode: "media",
	plugins: [],
	presets: [require("nativewind/preset")],
	theme: { extend },
};
