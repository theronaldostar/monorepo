import { tv } from "tailwind-variants";

const element = tv({
	base: "items-center justify-between gap-x-2 rounded-md bg-slate-200 px-3 py-2 dark:bg-slate-700",
	variants: {},
	defaultVariants: {},
});

const icon = tv({
	base: "stroke-slate-400",
	variants: {},
	defaultVariants: {},
});

const menu = tv({
	base: "max-h-36 rounded bg-slate-200 dark:bg-slate-700",
	variants: {},
	defaultVariants: {},
});

const optGroup = tv({
	base: "rounded px-2",
	variants: {
		disabled: {
			true: "pointer-events-none !cursor-not-allowed select-none bg-slate-300 p-2 dark:bg-slate-600",
		},
	},
	defaultVariants: {},
});

const option = tv({
	base: "web:hover:bg-white/40 cursor-pointer !rounded px-2 py-1 active:bg-white/40",
	variants: {
		disabled: {
			true: "pointer-events-none bg-white/20",
		},
	},
	defaultVariants: {},
});

const text = tv({
	base: "text-slate-400",
	variants: {},
	defaultVariants: {},
});

export { element, icon, menu, optGroup, option, text };
