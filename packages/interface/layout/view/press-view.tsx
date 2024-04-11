import { forwardRef } from "react";
import { Pressable, View, type PressableProps } from "react-native";

import { element } from "ui/layout/view/class";

interface PressViewProps extends PressableProps {}

const PressView = forwardRef<View, PressViewProps>(({ className, ...props }, ref) => {
	const classNames = element({ className, direction: "row" });

	return <Pressable className={classNames} ref={ref} {...props} />;
});

export { PressView, type PressViewProps };
