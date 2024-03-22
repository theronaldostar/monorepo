import { tv } from "tailwind-variants";

const check = tv({
	base: "version size-full text-sky-600",
	variants: {},
	defaultVariants: {},
});

const selection = tv({
	base: "border bg-transparent transition",
	variants: {
		checked: {
			true: "border-sky-600",
			false: "border-slate-400",
		},
		rounded: {
			false: "rounded",
			true: "rounded-full",
		},
		size: {
			small: "h-4 w-4",
			medium: "h-5 w-5",
			large: "h-6 w-6",
		},
	},
	defaultVariants: {
		checked: false,
		rounded: false,
		size: "small",
	},
});

const text = tv({
	base: "select-none",
	variants: {
		size: {
			small: "text-xs",
			medium: "text-sm",
			large: "text-base",
		},
	},
	defaultVariants: {
		size: "small",
	},
});

export { check, selection, text };
