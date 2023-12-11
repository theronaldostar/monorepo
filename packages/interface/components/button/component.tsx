import { Pressable, type PressableProps } from "react-native";
import { styled } from "nativewind";

import { useBuilder, useMergeTwins } from "@config/hooks";
import type { IconProps } from "@library/heroicons";
import { colors } from "@library/tailwindcss/theme.config";
import { Label } from "interface/components/label";

import { GeneralStyle, StyleBySize } from "interface/components/button/prototype";

interface ButtonProps extends PressableProps {
	color?: "secondary" | "error" | "warning";
	icon?: {
		svg: IconProps;
		position?: "left" | "right";
	};
	uppercase?: boolean;
	rounded?: boolean;
	size?: "sm" | "md" | "lg";
	title: string;
	variant?: "secondary" | "tertiary";
}

const Button = (props: ButtonProps) => {
	const { className, color, disabled, icon, uppercase = false, rounded = false, size, title, variant, ...rest } = props;

	const general = GeneralStyle({ color, variant });
	const bySize = StyleBySize({ rounded, size });

	const { component, svg, text } = useMergeTwins(general, bySize);

	const { svg: Svg, position = "left" } = icon || { svg: () => null };

	const baseClass = useBuilder(
		"!items-center !justify-center flex-row",
		className,
		component,
		position === "right" && "flex-row-reverse",
		disabled ? "opacity-25" : "!transition active:!scale-90",
		rounded ? "!rounded-full" : "rounded",
	);

	const titleClass = useBuilder("select-none leading-none", uppercase ? "uppercase" : "normal-case", text);

	const Component = styled(Pressable, baseClass);

	return (
		<Component {...rest}>
			{icon && <Svg color={colors.neutral[50]} className={svg} />}
			<Label className={titleClass}>{title}</Label>
		</Component>
	);
};

export { Button, type ButtonProps };
