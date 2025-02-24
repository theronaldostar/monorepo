import { Text, type TextProps } from "react-native";

import { text } from "ui/components/label/styles";

type LeadingProps = "none" | "tight" | "snug" | "normal" | "relaxed" | "loose";

interface LabelProps extends TextProps {
	align?: "center" | "right" | "justify";
	color?: "current" | "primary" | "secondary";
	decoration?: "no" | "underline" | "overline" | "through";
	leading?: LeadingProps;
	size?: "xs" | "sm" | "lg" | "xl" | "1xl" | "2xl" | "3xl" | "4xl" | "5xl";
	truncate?: boolean;
	weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
}

const Label = ({ align, className, color, decoration, leading, size, truncate, weight, ...props }: LabelProps) => {
	const classNames = text({ className, align, color, decoration, leading, size, weight });

	return <Text className={classNames} numberOfLines={truncate ? 1 : undefined} {...props} />;
};

export default Label;
export { Label, type LabelProps };
