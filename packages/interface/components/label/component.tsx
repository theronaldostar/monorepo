import type { ReactNode } from "react";
import { Text, type TextProps } from "react-native";
import { styled } from "nativewind";

import { useBuilder } from "@config/hooks";
import { fontColor, fontSize, fontWeight, textAlign, textDecoration } from "interface/components/label/prototype";

type leading = "leading-none" | "leading-snug" | "leading-normal" | "leading-relaxed" | "leading-tight" | "leading-loose";

interface LabelProps extends TextProps {
	align?: "left" | "center" | "right" | "justify";
	children?: ReactNode;
	color?: "current" | "primary" | "secondary";
	decoration?: "no" | "underline" | "overline" | "through";
	height?: leading | `!${leading}`;
	size?: "xs" | "sm" | "base" | "lg" | "xl" | "1xl" | "2xl" | "3xl" | "4xl" | "5xl";
	truncate?: boolean;
	weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
}

const Label = (props: LabelProps) => {
	const { align, className, color, decoration, height, size, truncate = true, weight, ...rest } = props;

	const presetClass = useBuilder(
		className,
		height,
		truncate && "!truncate",
		fontColor(color),
		fontSize(size),
		fontWeight(weight),
		textAlign(align),
		textDecoration(decoration),
	);

	const Component = styled(Text, presetClass);

	return <Component numberOfLines={truncate ? 1 : undefined} {...rest} />;
};

export { Label, type LabelProps };
