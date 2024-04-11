import { tv } from "tailwind-variants";

const text = tv({
	base: "",
	variants: {
		align: {
			left: "text-left",
			center: "text-center",
			right: "text-right",
			justify: "text-justify",
		},
		color: {
			current: "text-slate-600 dark:text-slate-200",
			primary: "text-slate-200",
			secondary: "text-neutral-600",
		},
		decoration: {
			underline: "underline",
			overline: "overline",
			through: "through",
			no: "no-underline",
		},
		leading: {
			none: "!leading-none",
			tight: "!leading-tight",
			snug: "!leading-snug",
			normal: "!leading-normal",
			relaxed: "!leading-relaxed",
			loose: "!leading-loose",
		},
		size: {
			"xs": "text-xs",
			"sm": "text-sm",
			"base": "text-base",
			"lg": "text-lg",
			"xl": "text-xl",
			"1xl": "text-1xl",
			"2xl": "text-2xl",
			"3xl": "text-3xl",
			"4xl": "text-4xl",
			"5xl": "text-5xl",
		},
		weight: {
			light: "font-light",
			normal: "font-normal",
			medium: "font-medium",
			semibold: "font-semibold",
			bold: "font-bold",
			extrabold: "font-extrabold",
		},
	},
	defaultVariants: {
		align: "left",
		color: "current",
		decoration: "no",
		leading: "tight",
		size: "base",
		weight: "normal",
	},
});

export { text };
