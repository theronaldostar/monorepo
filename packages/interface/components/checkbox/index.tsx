import { forwardRef, useState } from "react";
import { View } from "react-native";

import { Circle, Check } from "@lib/heroicons";
import { useClass } from "@hooks/class";

import { Label } from "ui/components/label";
import { PressView, TagView, type TagViewProps } from "ui/layout/view";
import { check, selection, text } from "ui/components/checkbox/class";

interface CheckBoxProps extends TagViewProps {
	boxClassName?: string;
	checked?: boolean;
	checkClassName?: string;
	onChange?: (checked: boolean) => void;
	rounded?: boolean;
	size?: "medium" | "large";
	title?: string;
	titleClassName?: string;
}

const CheckBox = forwardRef<View, CheckBoxProps>(
	({ boxClassName, className, checked = false, checkClassName, onChange, rounded, size, title, titleClassName, ...props }, ref): JSX.Element => {
		const [state, setState] = useState(checked);

		const classNames = useClass("items-center gap-1.5", className);
		const checkClass = check({ className: checkClassName });
		const selectionClass = selection({ className: boxClassName, checked: state, rounded, size });
		const textClass = text({ size, className: titleClassName });

		const Svg = rounded ? Circle : Check;

		const handleLayout = () => onChange?.(state);

		const handlePress = () => {
			setState(prev => !prev);
			handleLayout();
		};

		return (
			<TagView className={classNames} direction="row" onLayout={handleLayout} ref={ref} {...props}>
				<PressView className={selectionClass} onPress={handlePress}>
					{state && <Svg className={checkClass} strokeWidth={3} />}
				</PressView>
				{title && (
					<Label className={textClass} onPress={handlePress}>
						{title}
					</Label>
				)}
			</TagView>
		);
	},
);

export default CheckBox;
export { CheckBox, type CheckBoxProps };
