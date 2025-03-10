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
			sm: "h-4 w-4",
			md: "h-5 w-5",
			lg: "h-6 w-6",
		},
	},
	defaultVariants: {
		checked: false,
		rounded: false,
		size: "sm",
	},
});

const text = tv({
	base: "select-none",
	variants: {
		size: {
			sm: "text-xs",
			md: "text-sm",
			lg: "text-base",
		},
	},
	defaultVariants: {
		size: "sm",
	},
});

export { check, selection, text };
