import { SafeAreaView } from "react-native";
import { styled } from "nativewind";

import { useBuilder } from "@config/hooks";

import type { TagViewProps } from "./tag-view";

type SafeViewProps = TagViewProps;

const SafeView = (props: SafeViewProps) => {
	const { className, ...rest } = props;

	const baseClass = useBuilder("", className);

	const Component = styled(SafeAreaView, baseClass);

	return <Component {...rest} />;
};

export { SafeView, type SafeViewProps };
