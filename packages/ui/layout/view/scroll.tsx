import { forwardRef } from "react";
import { ScrollView, ScrollViewProps } from "react-native";

import { clsx } from "utils";

interface ScrollProps extends ScrollViewProps {}

const Scroll = forwardRef<ScrollView, ScrollProps>(({ className, ...props }, ref) => {
	const classNames = clsx("grow-0 web:outline-none", className);

	return <ScrollView className={classNames} ref={ref} {...props} />;
});

export { Scroll, type ScrollProps };
