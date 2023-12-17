import { useState } from "react";

import { colors } from "@library/tailwindcss/theme.config";
import { Check } from "@library/heroicons";

import { useBuilder } from "@config/hooks";
import { Label, type LabelProps } from "interface/components/label";
import { PressView, TagView } from "interface/layout";

type CheckboxChange = (status: boolean) => void;

interface CheckboxProps {
	checked?: boolean;
	checkColor?: string;
	classBox?: string;
	classTitle?: string;
	colorTitle?: LabelProps["color"];
	onChange?: CheckboxChange;
	title?: string;
}

const Checkbox = (props: CheckboxProps) => {
	const { checked = false, checkColor = null, classBox, classTitle, colorTitle, onChange = () => null, title } = props;

	const [state, setState] = useState(checked);

	const handlePress = () => {
		onChange(state);
		setState(prev => !prev);
	};

	const baseClassBox = useBuilder("h-5 w-5 items-center justify-center rounded border-2 border-neutral-400", classBox);
	const baseClassTitle = useBuilder("cursor-pointer select-none", classTitle);

	return (
		<TagView className="items-center space-x-2">
			<PressView className={baseClassBox} onPress={handlePress}>
				{state && <Check color={checkColor || colors.neutral[400]} strokeWidth={4} height={18} width={18} />}
			</PressView>
			{title && (
				<Label color={colorTitle} className={baseClassTitle} height="leading-tight" onPress={handlePress}>
					{title}
				</Label>
			)}
		</TagView>
	);
};

export { Checkbox, type CheckboxChange, type CheckboxProps };
