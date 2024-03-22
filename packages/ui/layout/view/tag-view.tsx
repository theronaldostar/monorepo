import { forwardRef } from "react";
import { View, type ViewProps } from "react-native";

import { element } from "ui/layout/view/class";

type WrapProps = "full" | "half" | "screen";

interface TagViewProps extends ViewProps {
	center?: boolean;
	direction?: "row" | "row-reverse" | "column-reverse";
	height?: WrapProps;
	horizontal?: boolean;
	overflow?: "hidden" | "scroll";
	width?: WrapProps;
}

const TagView = forwardRef<View, TagViewProps>((props, ref) => {
	const { center, className, direction, height, overflow, width, ...rest } = props;

	const classNames = element({ className: className, center, direction, height, overflow, width });

	return <View className={classNames} ref={ref} {...rest} />;
});

export { TagView, type TagViewProps };
