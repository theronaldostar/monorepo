import type { ReactNode } from "react";

import { useBuilder } from "@config/hooks";

import { Label } from "interface/components/label";
import { PressView } from "interface/layout";

interface OptionProps {
	children: ReactNode;
	disabled?: boolean;
	onPress?: (value: string) => void;
	selected?: boolean;
	value: string;
}

const Option = (props: OptionProps) => {
	const { children, onPress = () => null, selected, value, ...rest } = props;

	const baseClass = useBuilder("px-4 py-1", selected && "bg-success-600");
	const baseText = useBuilder("items-center", selected && "text-neutral-200", selected && "text-neutral-100");

	const handlePress = () => onPress(value);

	return (
		<PressView className={baseClass} onPress={handlePress} {...rest}>
			<Label className={baseText} size="lg" weight="semibold">
				{children}
			</Label>
		</PressView>
	);
};

export { Option, type OptionProps };
