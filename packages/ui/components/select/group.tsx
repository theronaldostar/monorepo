import type { Dispatch, SetStateAction } from "react";

import { ChevronDown, ChevronUp, VoidIcon, type IconProps } from "@lib/lucide";

import type { StateProps } from "ui/components/select/component";
import { element, icon, text } from "ui/components/select/styles";
import { Label } from "ui/components/label";
import { PressView, TagView } from "ui/layout";

type SelectGroupProps = {
	onPress: Dispatch<SetStateAction<StateProps>>;
	placeholder: string;
	state: StateProps;
	svgIcon?: IconProps;
};

const SelectGroup = ({ onPress, placeholder, state, svgIcon: Svg = VoidIcon }: SelectGroupProps) => {
	const Chevron = state.open ? ChevronUp : ChevronDown;

	const element_className = element({ className: "" });
	const iconClassName = icon({ className: "" });
	const textClassName = text({ className: "select-none" });

	return (
		<PressView className={element_className} onPress={() => onPress(prev => ({ ...prev, open: !prev.open }))}>
			<TagView className="items-center gap-2" direction="row">
				<Svg className={iconClassName} strokeWidth={2} />

				<Label className={textClassName} leading="tight" size="lg">
					{state.selected.string ?? placeholder}
				</Label>
			</TagView>

			<Chevron className={iconClassName} strokeWidth={3} />
		</PressView>
	);
};

export { SelectGroup, type SelectGroupProps };
