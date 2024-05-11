import type { Dispatch, SetStateAction } from "react";

import { ChevronDown, ChevronUp, type IconProps } from "@lib/heroicons";

import { element, icon, text } from "ui/components/select/class";
import type { StateProps } from "ui/components/select/component";
import Label from "ui/components/label";
import { PressView, TagView } from "ui/layout";

type SelectGroupProps = {
	onPress: Dispatch<SetStateAction<StateProps>>;
	placeholder: string;
	state: StateProps;
	svgIcon?: IconProps;
};

const SelectGroup = ({ onPress, placeholder, state, svgIcon }: SelectGroupProps) => {
	const Chevron = state.open ? ChevronUp : ChevronDown;

	const element_className = element({ className: "" });
	const icon_className = icon({ className: "" });
	const text_className = text({ className: "select-none" });

	return (
		<PressView className={element_className} onPress={() => onPress(prev => ({ ...prev, open: !prev.open }))}>
			<TagView className="items-center gap-2" direction="row">
				{svgIcon?.({ className: icon_className, strokeWidth: 2 })}
				<Label className={text_className} leading="none" size="lg">
					{state.selected.string ?? placeholder}
				</Label>
			</TagView>
			<Chevron className={icon_className} strokeWidth={3} />
		</PressView>
	);
};

export { SelectGroup, type SelectGroupProps };
