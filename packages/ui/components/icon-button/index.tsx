import { forwardRef } from "react";
import { View } from "react-native";

import { VoidIcon, type IconProps } from "@lib/lucide";

import { Label } from "ui/components/label";
import { PressView, type PressViewProps } from "ui/layout/view";
import { clsx } from "utils";

interface IconButtonProps extends PressViewProps {
	icon: IconProps;
	iconClassName?: string;
	title?: string;
}

const IconButton = forwardRef<View, IconButtonProps>(({ className, icon: Icon = VoidIcon, iconClassName, title, ...props }, ref) => {
	const classNames = clsx("active:scale-90 active:opacity-60 gap-2 items-center transition", className);
	const iconClass = clsx("text-slate-600 dark:text-slate-200", iconClassName);

	return (
		<PressView className={classNames} ref={ref} {...props}>
			<Icon className={iconClass} strokeWidth={2} />
			{title && <Label>{title}</Label>}
		</PressView>
	);
});

export default IconButton;
export { IconButton, type IconButtonProps };
