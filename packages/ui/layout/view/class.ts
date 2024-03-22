import { tv } from "tailwind-variants";

const element = tv({
	base: "web:outline-none",
	variants: {
		center: { true: "!items-center !justify-center" },
		direction: {
			"row": "flex-row",
			"row-reverse": "flex-row-reverse",
			"column-reverse": "flex-col-reverse",
		},
		height: { full: "!h-full", half: "web:!h-1/2", screen: "!h-screen" },
		overflow: { hidden: "web:!overflow-hidden", scroll: "web:!overflow-scroll" },
		width: { full: "!w-full", half: "web:!w-1/2", screen: "!w-screen" },
	},
	defaultVariants: {},
});

export { element };
