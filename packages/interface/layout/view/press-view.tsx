import { Pressable, type PressableProps } from "react-native";
import { StyledComponent } from "nativewind";

import { useBuilder } from "@config/hooks";

interface PressViewProps extends PressableProps {}

const PressView = (props: PressViewProps) => {
	const { className, ...rest } = props;

	const presetClass = useBuilder("flex-row", className);

	return <StyledComponent component={Pressable} tw={presetClass} {...rest} />;
};

export { PressView, type PressViewProps };
