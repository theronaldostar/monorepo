import { ScrollView } from "react-native";
import { styled } from "nativewind";

import { useBuilder } from "@config/hooks";

import type { TagViewProps } from "interface/layout/view/tag-view";

const Scroll = (props: TagViewProps) => {
	const { className, height = "", width = "", ...rest } = props;

	const baseClass = useBuilder("", className, height, width);

	const Component = styled(ScrollView, baseClass);

	return <Component {...rest} />;
};

export { Scroll };
