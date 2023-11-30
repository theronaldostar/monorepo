// @ts-check
const tailwindConfig = require("@library/tailwindcss");

/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["./App.tsx", "../../packages/**/*.{js,jsx,ts,tsx}"],
	plugins: [],
	presets: [tailwindConfig],
};
