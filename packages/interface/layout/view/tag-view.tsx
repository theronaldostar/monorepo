import { View, type ViewProps } from "react-native";
import { styled } from "nativewind";

import { useBuilder } from "@config/hooks";
import { overflowProp } from "./prototype";
import { HeightClassWrap, WidthClassWrap, Size } from "@config/types";

interface TagViewProps extends ViewProps {
	direction?: "flex-row" | "flex-row-reverse" | "flex-col" | "flex-col-reverse";
	height?: keyof typeof HeightClassWrap;
	horizontal?: boolean;
	overflow?: "auto" | "hidden" | "scroll";
	width?: keyof typeof WidthClassWrap;
}

const TagView = (props: TagViewProps) => {
	const { className, direction = "flex-row", overflow = undefined, height = "", width = "", ...rest } = props;

	const baseClass = useBuilder(
		"",
		className,
		direction,
		HeightClassWrap[height as Size],
		overflow ? overflowProp(overflow) : "",
		WidthClassWrap[width as Size],
	);

	const Component = styled(View, baseClass);

	return <Component {...rest} />;
};

export { TagView, type TagViewProps };
