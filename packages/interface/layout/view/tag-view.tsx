import { View, type ViewProps } from "react-native";
import { StyledComponent } from "nativewind";

import { useBuilder } from "@config/hooks";
import { overflowProp, classWrap, type classWrapProps } from "interface/layout/view/prototype";

interface TagViewProps extends ViewProps {
	direction?: "flex-row" | "flex-row-reverse" | "flex-col" | "flex-col-reverse";
	height?: classWrapProps;
	horizontal?: boolean;
	overflow?: "auto" | "hidden" | "scroll";
	width?: classWrapProps;
}

const TagView = (props: TagViewProps) => {
	const { className, direction = "flex-row", overflow = undefined, height, width, ...rest } = props;

	const baseClass = useBuilder(
		"",
		className,
		classWrap("height")[height as classWrapProps],
		classWrap("width")[width as classWrapProps],
		direction,
		overflow ? overflowProp(overflow) : "",
	);

	return <StyledComponent component={View} tw={baseClass} {...rest} />;
};

export { TagView, type TagViewProps };
