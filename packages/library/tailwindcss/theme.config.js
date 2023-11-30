// @ts-check
const { fontFamily: tw_fontFamily } = require("tailwindcss/defaultTheme");

const colors = {
	current: "currentColor",
	neutral: {
		900: "#111827",
		800: "#1f2937",
		700: "#374151",
		600: "#4b5563",
		500: "#6b7280",
		400: "#9ca3af",
		300: "#d1d5db",
		200: "#e5e7eb",
		100: "#f3f4f6",
		50: "#f9fafb",
	},
	yellow: {
		900: "#f09d38",
		800: "#fbc685",
		700: "#faa339",
		600: "#7a6141",
		500: "#c7822e",
	},
	primary: {
		900: "#00d3ff",
		800: "#4bddfb",
		700: "#00d0fa",
		600: "#256c7a",
		500: "#00a6c7",
	},
	error: {
		900: "#e02424",
		800: "#fb7373",
		700: "#fa2828",
		600: "#eb5C6F",
		500: "#c72020",
	},
	success: {
		900: "#85e0a3",
		800: "#dffbe8",
		700: "#93fab6",
		600: "#0e7c60",
		500: "#75c791",
	},
	warning: {
		900: "#F09D38",
		800: "#FBC685",
		700: "#faa339",
		600: "#7A6141",
		500: "#c7822e",
	},
};

const backgroundColor = {
	...colors,
	app: {
		base: colors.neutral[100],
		primary: colors.primary[800],
		secondary: colors.success[600],
		tertiary: colors.success[500],
	},
};

const boxShadow = {
	normal: "0 4px 4px rgba(0,0,0,.25)",
};

const fontFamily = {
	sans: [...tw_fontFamily.sans, "var(--font-inter)"],
};

const fontSize = {
	"1xl": "1.375rem",
};

const minWidth = {
	"min-w-10": "2.5rem",
};

const spacing = {
	5.5: "1.375rem",
	50: "12.5rem",
};

/** @type {import("tailwindcss").Config["theme"]} */
const themeConfig = {
	backgroundColor,
	boxShadow,
	colors,
	fontFamily,
	fontSize,
	minWidth,
	spacing,
};

module.exports = themeConfig;
