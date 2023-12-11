import getClass from "@config/hooks/class";
import type { ButtonProps } from "interface/components/button/component";

type GeneralStyleProps = {
	color: "primary" | ButtonProps["color"];
	variant?: "primary" | ButtonProps["variant"];
};

type StyleBySizeProps = {
	rounded: boolean;
	size: ButtonProps["size"];
};

const GeneralStyle = (props: GeneralStyleProps) => {
	const { color = "primary", variant = "primary" } = props;

	return getClass(
		{
			primary: getClass(
				{
					primary: {
						component: "bg-primary-900",
						svg: "stroke-white",
						text: "text-white",
					},
					secondary: {
						component: "border border-primary-900",
						svg: "stroke-primary-900",
						text: "!text-primary-900",
					},
					tertiary: {
						component: "backdrop-blur-sm bg-primary-900/10",
						svg: "stroke-",
						text: "",
					},
				},
				variant,
			),
			secondary: getClass(
				{
					primary: {
						component: "bg-success-600",
						svg: "stroke-white",
						text: "text-white",
					},
					secondary: {
						component: "border border-success-600",
						svg: "stroke-",
						text: "!text-success-600",
					},
					tertiary: {
						component: "bg-success-600/10",
						svg: "stroke-",
						text: "",
					},
				},
				variant,
			),
			error: getClass(
				{
					primary: {
						component: "bg-error-900",
						svg: "stroke-white",
						text: "text-white",
					},
					secondary: {
						component: "border border-error-900",
						svg: "stroke-",
						text: "!text-error-900",
					},
					tertiary: {
						component: "",
						svg: "stroke-",
						text: "",
					},
				},
				variant,
			),
			warning: getClass(
				{
					primary: {
						component: "bg-warning-700",
						svg: "stroke-white",
						text: "text-white",
					},
					secondary: {
						component: "",
						svg: "stroke-",
						text: "",
					},
					tertiary: {
						component: "bg-warning-700/80",
						svg: "stroke-",
						text: "",
					},
				},
				variant,
			),
		},
		color,
	);
};

const StyleBySize = (props: StyleBySizeProps) => {
	const { rounded, size = "lg" } = props;

	return getClass(
		{
			lg: {
				component: `${rounded ? "px-8" : "px-6"} py-3 space-x-3`,
				svg: "h-6 w-6",
				text: "lg",
			},
			sm: {
				component: `${rounded ? "px-4" : "px-2"} py-1 space-x-1`,
				svg: "h-4 w-4",
				text: "xs",
			},
			md: {
				component: `px-4 py-2 space-x-2`,
				svg: "h-5 w-5",
				text: "sm",
			},
		},
		size,
	);
};

export { GeneralStyle, StyleBySize, type GeneralStyleProps, type StyleBySizeProps };
