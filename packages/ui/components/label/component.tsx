import { forwardRef } from "react";
import { Text, type TextProps } from "react-native";

import { text } from "ui/components/label/styles";

import { clsx } from "utils";

type lineHeight = "none" | "tight" | "snug" | "normal" | "relaxed" | "loose";

interface LabelProps extends TextProps {
	align?: "center" | "right" | "justify";
	color?: "current" | "primary" | "secondary";
	decoration?: "no" | "underline" | "overline" | "through";
	leading?: lineHeight;
	size?: "xs" | "sm" | "lg" | "xl" | "1xl" | "2xl" | "3xl" | "4xl" | "5xl";
	truncate?: boolean;
	weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
}

const Label = forwardRef<Text, LabelProps>(({ align, className, color, decoration, leading, size, truncate, weight, ...props }, ref) => {
	const classNames = clsx(className, text({ align, color, decoration, leading, size, weight }));

	return <Text className={classNames} numberOfLines={truncate ? 1 : void 0} {...props} ref={ref} />;
});

export default Label;
export { Label, type LabelProps };
