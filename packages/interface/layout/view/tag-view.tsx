import { View, type ViewProps } from "react-native";
import { styled } from "nativewind";

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
		direction,
		classWrap("height")[height as classWrapProps],
		overflow ? overflowProp(overflow) : "",
		classWrap("width")[width as classWrapProps],
	);

	const Component = styled(View, baseClass);

	return <Component {...rest} />;
};

export { TagView, type TagViewProps };
