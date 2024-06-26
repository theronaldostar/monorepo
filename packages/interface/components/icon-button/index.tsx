import { forwardRef } from "react";
import { View } from "react-native";

import type { IconProps } from "@lib/heroicons";
import { useClass } from "@hooks/class";

import Label from "ui/components/label";
import { PressView, type PressViewProps } from "ui/layout/view";

interface IconButtonProps extends PressViewProps {
	icon: IconProps;
	iconClassName?: string;
	title?: string;
}

const IconButton = forwardRef<View, IconButtonProps>(({ className, icon, iconClassName, title, ...props }, ref) => {
	const classNames = useClass("active:scale-90 active:opacity-60 gap-2 items-center transition", className);
	const iconClass = useClass("text-slate-600 dark:text-slate-200", iconClassName);

	return (
		<PressView className={classNames} ref={ref} {...props}>
			{icon?.({ className: iconClass, strokeWidth: 2 })}
			{title && <Label>{title}</Label>}
		</PressView>
	);
});

export default IconButton;
export { IconButton, type IconButtonProps };
