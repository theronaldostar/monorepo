import type { Dispatch, SetStateAction } from "react";

import { ChevronDown, ChevronUp, VoidIcon, type IconProps } from "@lib/lucide";
import Label from "ui/components/label";
import type { StateProps } from "ui/components/select/component";
import { element, icon, text } from "ui/components/select/styles";
import { PressView, TagView } from "ui/layout";

type DropdownProps = {
	setState: Dispatch<SetStateAction<StateProps>>;
	placeholder: string;
	state: StateProps;
	svgIcon?: IconProps;
};

const Dropdown = ({ placeholder, state, setState, svgIcon: Svg = VoidIcon }: DropdownProps) => {
	const Chevron = state.open ? ChevronUp : ChevronDown;

	const handleSelect = () => setState(prev => ({ ...prev, open: !prev.open }));

	return (
		<PressView className={element()} onPress={handleSelect}>
			<TagView className="items-center gap-2" direction="row">
				<Svg className={icon()} strokeWidth={2} />

				<Label className={text()} leading="tight" size="lg">
					<>{state.selected.title ?? placeholder}</>
				</Label>
			</TagView>

			<Chevron className={icon()} strokeWidth={3} />
		</PressView>
	);
};

export { Dropdown, type DropdownProps };
