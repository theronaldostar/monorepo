import { tv } from "tailwind-variants";

const group = tv({
	base: "web:overflow-hidden h-10 cursor-text items-center gap-x-2 rounded-md border bg-slate-200 px-3 py-2 dark:bg-slate-700",
	variants: {
		disabled: {
			true: "cursor-auto opacity-40",
		},
		focus: {
			false: "border-slate-200 dark:border-slate-700",
			true: "border-sky-600",
		},
	},
	defaultVariants: {
		focus: false,
	},
});

const input = tv({
	base: "web:autofill:shadow-[inset_0_0_0_1000px_#94a3b8] web:outline-none web:autofill:rounded web:autofill:px-2 flex-1 bg-transparent text-lg leading-tight text-slate-600 selection:text-sky-600 placeholder:text-slate-400 dark:text-slate-200",
	variants: {
		disabled: {
			true: "web:read-only:pointer-events-none",
		},
	},
	defaultVariants: {},
});

const svg = tv({
	base: "",
	variants: {
		focus: {
			false: "text-slate-400",
			true: "text-sky-600",
		},
	},
	defaultVariants: {
		focus: false,
	},
});

const texTitle = tv({
	base: "cursor-pointer select-none",
	variants: {
		disabled: {
			true: "cursor-default opacity-40",
		},
	},
	defaultVariants: {},
});

export { input, group, svg, texTitle };
