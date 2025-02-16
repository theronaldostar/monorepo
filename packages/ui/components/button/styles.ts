import { tv } from "tailwind-variants";

const container = tv({
	base: "content-middle bg-sky-600 transition active:scale-90 active:opacity-60",
	variants: {
		direction: {
			left: "flex-row",
			right: "flex-row-reverse",
		},
		disabled: { true: "pointer-events-none opacity-20" },
		outline: { true: "border border-sky-600 bg-transparent" },
		rounded: {
			false: "rounded-md",
			true: "rounded-full",
		},
		size: {
			lg: "h-10 gap-2 px-4 py-2",
			md: "h-8 gap-1.5 px-4 py-1.5",
			sm: "h-6 gap-1 px-2.5 py-1",
		},
	},
	defaultVariants: {
		rounded: false,
		size: "md",
	},
});

const svg = tv({
	base: "stroke-slate-100",
	variants: {
		outline: { true: "stroke-sky-600" },
		size: {
			lg: "size-6",
			md: "size-5",
			sm: "size-4",
		},
	},
	defaultVariants: {
		size: "md",
	},
});

const text = tv({
	base: "select-none !text-slate-100",
	variants: {
		outline: {
			true: "!text-sky-600",
		},
		size: {
			lg: "text-base",
			sm: "text-xs",
			md: "text-sm",
		},
		uppercase: {
			false: "normal-case",
			true: "uppercase",
		},
	},
	defaultVariants: {
		size: "md",
		uppercase: false,
	},
});

export { container, svg, text };
