import { forwardRef } from "react";
import { ScrollView, ScrollViewProps } from "react-native";

import { useClass } from "@config/hooks";

interface ScrollProps extends ScrollViewProps {}

const Scroll = forwardRef<ScrollView, ScrollProps>((props, ref) => {
	const { className, ...rest } = props;

	const classNames = useClass("grow-0 web:outline-none", className);

	return <ScrollView className={classNames} ref={ref} {...rest} />;
});

export { Scroll, type ScrollProps };
