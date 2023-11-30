import { Pressable, type PressableProps } from "react-native";
import { StyledComponent as Component } from "nativewind";

import { useBuilder } from "@config/hooks";

interface PressViewProps extends PressableProps {}

const PressView = (props: PressViewProps) => {
	const { className, ...rest } = props;

	const baseClass = useBuilder("flex-row", className);

	return <Component component={Pressable} tw={baseClass} {...rest} />;
};

export { PressView, type PressViewProps };
