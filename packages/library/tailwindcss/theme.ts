import { fontFamily as fonts } from "tailwindcss/defaultTheme";

const colors = {
	current: "currentColor",
	primary: "#f472b6",
	secondary: "#c084fc",
	state: {
		error: "#f6465d",
		success: "#0ecb81",
		warning: "#f6993f",
	},
};

const backgroundColor = {
	...colors,
	dark: { primary: "#21222c", secondary: "#343746", tertiary: "#44475a" },
	light: { primary: "#e2e8f0", secondary: "#f0f2f5", tertiary: "#fff" },
};

const boxShadow = {
	normal: "0 4px 4px rgba(0,0,0, .25)",
};

const fontFamily = {
	sans: [...fonts.sans, "var(--font-inter)"],
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

export default { backgroundColor, colors, boxShadow, fontFamily, fontSize, minWidth, spacing };
export { backgroundColor, colors, boxShadow, fontFamily, fontSize, minWidth, spacing };
