import { Eye, EyeOff } from "@lib/lucide";

import { PressView } from "ui/layout/view";

type SeePasswordProps = {
	disabled?: boolean;
	onChange: VoidFunction;
	show: boolean;
	svgClassName?: string;
	visible: boolean;
};

const SeePassword = ({ disabled, onChange, show, svgClassName, visible, ...props }: SeePasswordProps) => {
	const Icon = visible ? EyeOff : Eye;
	const handlePress = () => onChange?.();

	if (!show) return null;

	return (
		<PressView disabled={disabled} onPress={handlePress} {...props}>
			<Icon strokeWidth={2} className={svgClassName} />
		</PressView>
	);
};

export { SeePassword, type SeePasswordProps };
