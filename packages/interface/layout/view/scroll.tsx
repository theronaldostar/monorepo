import { ScrollView } from "react-native";
import { StyledComponent as Component } from "nativewind";

import { useBuilder } from "@config/hooks";

import type { TagViewProps } from "./tag-view";

const Scroll = (props: TagViewProps) => {
	const { className, height = "", width = "", ...rest } = props;

	const baseClass = useBuilder("", className, height, width);

	return <Component component={ScrollView} tw={baseClass} {...rest} />;
};

export { Scroll };
