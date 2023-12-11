import { useState } from "react";

import { colors } from "@library/tailwindcss/theme.config";
import { Check } from "@library/heroicons";

import { useBuilder } from "@config/hooks";
import { Label, type LabelProps } from "interface/components/label";
import { PressView, TagView } from "interface/layout";

type CheckboxChange = (status: boolean) => void;

interface CheckboxProps {
	checked?: boolean;
	classTitle?: string;
	colorTitle?: LabelProps["color"];
	onChange?: CheckboxChange;
	title?: string;
}

const Checkbox = (props: CheckboxProps) => {
	const { checked = false, classTitle, colorTitle, onChange = () => null, title } = props;

	const [state, setState] = useState(checked);

	const handlePress = () => {
		onChange(state);
		setState(prev => !prev);
	};

	const baseClassTitle = useBuilder("cursor-pointer select-none", classTitle);

	return (
		<TagView className="items-center space-x-2">
			<PressView className="h-5 w-5 items-center justify-center rounded border-2 border-neutral-400" onPress={handlePress}>
				{state && <Check color={colors.primary[900]} height={18} width={18} />}
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
