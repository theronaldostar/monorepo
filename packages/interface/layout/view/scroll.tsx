import { ScrollView } from "react-native";
import { StyledComponent } from "nativewind";

import { useBuilder } from "@config/hooks";
import type { TagViewProps } from "interface/layout/view/tag-view";

const Scroll = (props: TagViewProps) => {
	const { className, height = "", width = "", ...rest } = props;

	const presetClass = useBuilder("", className, height, width);

	return <StyledComponent component={ScrollView} tw={presetClass} {...rest} />;
};

export { Scroll };
