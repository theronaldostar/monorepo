import type { LabelProps } from ".";

import getClass from "@config/hooks/class";

const fontColor = (color: LabelProps["color"] = "current") =>
	getClass(
		{
			current: "text-neutral-700",
			primary: "text-neutral-50",
			secondary: "text-neutral-900",
		},
		color,
	);

const fontSize = (size: LabelProps["size"] = "base") =>
	getClass(
		{
			"xs": "!text-xs",
			"sm": "!text-sm",
			"base": "text-base",
			"lg": "!text-lg",
			"xl": "!text-xl",
			"1xl": "!text-1xl",
			"2xl": "!text-2xl",
			"3xl": "!text-3xl",
			"4xl": "!text-4xl",
			"5xl": "!text-5xl",
		},
		size,
	);

const fontWeight = (weight: LabelProps["weight"] = "normal") =>
	getClass(
		{
			light: "!font-light",
			normal: "font-normal",
			medium: "!font-medium",
			semibold: "!font-semibold",
			bold: "!font-bold",
			extrabold: "!font-extrabold",
		},
		weight,
	);

const textAlign = (align: LabelProps["align"] = "left") =>
	getClass(
		{
			left: "text-left",
			center: "!text-center",
			right: "!text-right",
			justify: "!text-justify",
		},
		align,
	);

const textDecoration = (decoration: LabelProps["decoration"] = "no") =>
	getClass(
		{
			underline: "!underline",
			overline: "!overline",
			through: "!through",
			no: "no-underline",
		},
		decoration,
	);

export { fontColor, fontSize, fontWeight, textAlign, textDecoration };
