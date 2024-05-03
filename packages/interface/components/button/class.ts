import { tv } from "tailwind-variants";

const container = tv({
	base: "justify-middle bg-sky-600 transition active:scale-90 active:opacity-60",
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
			small: "h-6 gap-1 px-2.5 py-1",
			medium: "h-8 gap-1.5 px-4 py-1.5",
			large: "h-10 gap-2 px-4 py-2",
		},
	},
	defaultVariants: {
		rounded: false,
		size: "medium",
	},
});

const svg = tv({
	base: "stroke-slate-100",
	variants: {
		outline: { true: "stroke-sky-600" },
		size: {
			small: "size-4",
			medium: "size-5",
			large: "size-6",
		},
	},
	defaultVariants: {
		size: "medium",
	},
});

const text = tv({
	base: "select-none !text-slate-100",
	variants: {
		outline: {
			true: "!text-sky-600",
		},
		size: {
			small: "text-xs",
			medium: "text-sm",
			large: "text-base",
		},
		uppercase: {
			false: "normal-case",
			true: "uppercase",
		},
	},
	defaultVariants: {
		size: "medium",
		uppercase: false,
	},
});

export { container, svg, text };
