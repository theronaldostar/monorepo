import { ScrollView, type ScrollViewProps } from "react-native";
import { styled } from "nativewind";

import { useBuilder } from "@config/hooks";

type ScrollProps = ScrollViewProps;

const Scroll = (props: ScrollViewProps) => {
	const { className, ...rest } = props;

	const baseClass = useBuilder("", className);

	const Component = styled(ScrollView, baseClass);

	return <Component {...rest} />;
};

export { Scroll, type ScrollProps };
