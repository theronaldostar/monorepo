import { Pressable, type PressableProps } from "react-native";
import { styled } from "nativewind";

import { useBuilder } from "@config/hooks";

interface PressViewProps extends PressableProps {}

const PressView = (props: PressViewProps) => {
	const { className, ...rest } = props;

	const baseClass = useBuilder("flex-row", className);

	const Component = styled(Pressable, baseClass);

	return <Component {...rest} />;
};

export { PressView, type PressViewProps };
