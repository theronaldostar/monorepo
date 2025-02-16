import { forwardRef, type ReactNode } from "react";
import { View, type PressableProps } from "react-native";

import { IconProps } from "@lib/heroicons";
import { container, svg, text } from "ui/components/button/styles";
import { Label } from "ui/components/label";
import { PressView } from "ui/layout/view";
import { clsx } from "utils";

interface ButtonProps extends PressableProps {
	icon?: {
		position: "left" | "right";
		svg: IconProps;
	};
	rounded?: boolean;
	size?: "sm" | "lg";
	titleClassName?: string;
	title: ReactNode;
	uppercase?: boolean;
	outline?: boolean;
}

const Button = forwardRef<View, ButtonProps>(({ className, disabled, icon, outline, rounded, size, titleClassName, title, uppercase, ...props }, ref) => {
	const { position, svg: svgIcon } = icon! || {};

	const classNames = clsx("", className);

	const containerClass = container({ className: classNames, disabled: disabled!, direction: position, outline, rounded, size });
	const iconClass = svg({ className: "", outline, size });
	const labelClass = text({ className: titleClassName, outline, size, uppercase });

	return (
		<PressView className={containerClass} ref={ref} {...props}>
			{svgIcon?.({ className: iconClass })}
			<Label className={labelClass}>{title}</Label>
		</PressView>
	);
});

export default Button;
export { Button, type ButtonProps };
