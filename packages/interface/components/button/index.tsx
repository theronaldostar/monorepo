import { Pressable, type PressableProps } from "react-native";
import { StyledComponent as Component } from "nativewind";

import { useBuilder } from "@config/hooks";

type ButtonProps = PressableProps;

const Button = (props: ButtonProps) => {
	const { className, ...rest } = props;

	const baseClass = useBuilder("", className);

	return <Component component={Pressable} tw={baseClass} {...rest} />;
};

export { Button, type ButtonProps };
