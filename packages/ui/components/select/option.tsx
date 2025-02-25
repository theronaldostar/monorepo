import type { ReactNode } from "react";

import Label from "ui/components/label";
import { option } from "ui/components/select/styles";
import { PressView, type PressViewProps } from "ui/layout";

interface OptionProps extends PressViewProps {
	children: ReactNode;
	selected?: boolean;
	value: unknown;
}

const Option = ({ children, className, disabled, ...props }: OptionProps) => {
	const classNames = option({ className, disabled: disabled! });

	return (
		<PressView className={classNames} {...props}>
			<Label children={children} leading="none" size="lg" />
		</PressView>
	);
};

export { Option, type OptionProps };
