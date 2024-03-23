import { forwardRef } from "react";
import { View } from "react-native";

import { useClass } from "@config/hooks";
import type { IconProps } from "@lib/heroicons";
import Label from "ui/components/label";
import { PressView, type PressViewProps } from "ui/layout";

interface IconButtonProps extends PressViewProps {
	icon: IconProps;
	iconClassName?: string;
	title?: string;
}

const IconButton = forwardRef<View, IconButtonProps>((props, ref) => {
	const { className, icon, iconClassName, title, ...rest } = props;

	const classNames = useClass("active:scale-90 active:opacity-60 gap-2 items-center transition", className);
	const iconClass = useClass("text-slate-600 dark:text-slate-200", iconClassName);

	return (
		<PressView className={classNames} ref={ref} {...rest}>
			{icon?.({ className: iconClass, strokeWidth: 2 })}
			<Label>{title}</Label>
		</PressView>
	);
});

export { IconButton, type IconButtonProps };
