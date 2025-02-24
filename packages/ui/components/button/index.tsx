import { forwardRef, type ReactNode } from "react";
import { View, type PressableProps } from "react-native";

import { VoidIcon, type IconProps } from "@lib/lucide";
import { container, svg, text } from "ui/components/button/styles";
import { Label } from "ui/components/label";
import { PressView } from "ui/layout/view";

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
	const { position, svg: Icon = VoidIcon } = icon! || {};

	const containerClass = container({ className, disabled: disabled!, direction: position, outline, rounded, size });
	const iconClass = svg({ outline, size });
	const labelClass = text({ className: titleClassName, outline, size, uppercase });

	return (
		<PressView className={containerClass} ref={ref} {...props}>
			<Icon className={iconClass} />
			<Label className={labelClass}>{title}</Label>
		</PressView>
	);
});

export default Button;
export { Button, type ButtonProps };
