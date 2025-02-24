import { forwardRef } from "react";
import { Pressable, View, type PressableProps } from "react-native";

import tvClass from "ui/layout/view/class";

interface PressViewProps extends PressableProps {}

const PressView = forwardRef<View, PressViewProps>(({ className, ...props }, ref) => {
	const classNames = tvClass({ className, direction: "row" });

	return <Pressable className={classNames} ref={ref} {...props} />;
});

export { PressView, type PressViewProps };
