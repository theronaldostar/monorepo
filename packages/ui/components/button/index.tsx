import { forwardRef, type ReactNode } from "react";
import { View, type PressableProps } from "react-native";

import { IconProps } from "@lib/heroicons";
import { useClass } from "@hooks/class";

import { container, svg, text } from "ui/components/button/class";
import { Label } from "ui/components/label";
import { PressView } from "ui/layout/view";

interface ButtonProps extends PressableProps {
	icon?: {
		position: "left" | "right";
		svg: IconProps;
	};
	rounded?: boolean;
	size?: "small" | "large";
	titleClassName?: string;
	title: ReactNode;
	uppercase?: boolean;
	outline?: boolean;
}

const Button = forwardRef<View, ButtonProps>((props, ref) => {
	const { className, disabled, icon, outline, rounded, size, titleClassName, title, uppercase, ...rest } = props;
	const { position, svg: svgIcon } = icon! || {};

	const classNames = useClass("", className);

	const containerClass = container({ className: classNames, disabled: disabled!, direction: position, outline, rounded, size });
	const iconClass = svg({ className: "", outline, size });
	const labelClass = text({ className: titleClassName, outline, size, uppercase });

	return (
		<PressView className={containerClass} ref={ref} {...rest}>
			{svgIcon?.({ className: iconClass })}
			<Label className={labelClass}>{title}</Label>
		</PressView>
	);
});

export default Button;
export { Button, type ButtonProps };
