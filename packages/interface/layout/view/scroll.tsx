import { forwardRef } from "react";
import { ScrollView, ScrollViewProps } from "react-native";

import { useClass } from "@hooks/class";

interface ScrollProps extends ScrollViewProps {}

const Scroll = forwardRef<ScrollView, ScrollProps>(({ className, ...props }, ref) => {
	const classNames = useClass("grow-0 web:outline-none", className);

	return <ScrollView className={classNames} ref={ref} {...props} />;
});

export { Scroll, type ScrollProps };
