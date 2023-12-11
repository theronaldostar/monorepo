import { SafeAreaView } from "react-native";
import { StyledComponent } from "nativewind";

import { useBuilder } from "@config/hooks";
import { overflowProp } from "interface/layout/view/prototype";
import type { TagViewProps } from "interface/layout/view/tag-view";

const SafeView = (props: TagViewProps) => {
	const { className, overflow = "hidden", height = "", width = "", ...rest } = props;

	const baseClass = useBuilder("flex-1", className, height, overflowProp(overflow), width);

	return <StyledComponent component={SafeAreaView} tw={baseClass} {...rest} />;
};

export { SafeView };
