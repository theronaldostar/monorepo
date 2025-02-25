import { tv } from "tailwind-variants";

const element = tv({
	base: "items-center justify-between gap-2 rounded-md bg-slate-200 px-3 py-2 dark:bg-slate-700",
	variants: {},
	defaultVariants: {},
});

const icon = tv({
	base: "stroke-slate-400 dark:stroke-slate-200",
	variants: {},
	defaultVariants: {},
});

const menu = tv({
	base: "max-h-36 rounded bg-slate-200 px-3 py-2 dark:bg-slate-700",
	variants: {},
	defaultVariants: {},
});

const optGroup = tv({
	base: "gap-2 rounded bg-slate-300 p-2 dark:bg-slate-600",
	variants: {
		disabled: {
			true: "web:!cursor-not-allowed pointer-events-none select-none bg-slate-400 p-2 dark:bg-slate-600/30",
		},
	},
	defaultVariants: {},
});

const option = tv({
	base: "web:hover:bg-white/40 web:cursor-pointer !rounded px-2 py-1 active:bg-white/40",
	variants: {
		disabled: {
			true: "pointer-events-none bg-white/20",
		},
	},
	defaultVariants: {},
});

const text = tv({
	base: "select-none text-slate-400",
	variants: {},
	defaultVariants: {},
});

export { element, icon, menu, optGroup, option, text };
