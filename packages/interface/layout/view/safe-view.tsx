import { SafeAreaView } from "react-native";
import { StyledComponent } from "nativewind";

import { useBuilder } from "@config/hooks";
import { overflowProp } from "interface/layout/view/prototype";
import type { TagViewProps } from "interface/layout/view/tag-view";

const SafeView = (props: TagViewProps) => {
	const { className, overflow = "hidden", height = "", width = "", ...rest } = props;

	const presetClass = useBuilder("flex-1", className, height, width, overflowProp(overflow));

	return <StyledComponent component={SafeAreaView} tw={presetClass} {...rest} />;
};

export { SafeView };
