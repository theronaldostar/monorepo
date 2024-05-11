import { forwardRef } from "react";
import { Text } from "react-native";

import { PressView } from "ui/layout";
import { Label, type LabelProps } from "ui/components/label";
import { option } from "ui/components/select/class";

interface OptionProps extends LabelProps {
	selected?: boolean;
	value: string;
}

const Option = forwardRef<Text, OptionProps>(({ children, className, disabled, ...props }, ref) => {
	const classNames = option({ className, disabled });

	return (
		<PressView className={classNames} ref={ref} {...props}>
			<Label leading="tight" size="lg">
				{children}
			</Label>
		</PressView>
	);
});

export default Option;
export { Option, type OptionProps };
