import { Pressable, type PressableProps } from "react-native";
import { styled } from "nativewind";

import { useBuilder, useMergeTwins } from "@config/hooks";
import type { IconProps } from "@library/heroicons";
import { Label } from "interface/components/label";

import { GeneralStyle, StyleBySize } from "./prototype";

interface ButtonProps extends PressableProps {
	color?: "secondary" | "error" | "warning";
	icon?: {
		svg: IconProps;
		position?: "left" | "right";
	};
	lowercase?: boolean;
	rounded?: boolean;
	size?: "sm" | "md" | "lg";
	title: string;
	variant?: "secondary" | "tertiary";
}

const Button = (props: ButtonProps) => {
	const { color, icon, lowercase = false, rounded = false, size, title, variant, ...rest } = props;

	const general = GeneralStyle({ color, variant });
	const bySize = StyleBySize({ rounded, size });

	const { component, svg, text } = useMergeTwins(general, bySize);

	const { svg: Svg, position = "left" } = icon || { svg: () => null };

	const baseClass = useBuilder(
		"!items-center !justify-center flex-row",
		component,
		position === "right" && "flex-row-reverse",
		rest.className,
		rest?.disabled ? "opacity-25" : "!transition active:!scale-90",
		rounded ? "!rounded-full" : "rounded",
	);

	const titleClass = useBuilder("select-none leading-none", lowercase ? "normal-case" : "uppercase", text);

	const Component = styled(Pressable, baseClass);

	return (
		<Component {...rest}>
			<Svg className={svg} />
			<Label className={titleClass}>{title}</Label>
		</Component>
	);
};

export { Button, type ButtonProps };
