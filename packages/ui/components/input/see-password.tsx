import { Eye, EyeSlash } from "@lib/heroicons";

import { PressView } from "ui/layout/view";

type SeePasswordProps = {
	disabled?: boolean;
	onChange: VoidFunction;
	show: boolean;
	svgClassName?: string;
	visible: boolean;
};

const SeePassword = ({ disabled, onChange, show, svgClassName, visible, ...props }: SeePasswordProps) => {
	const Icon = visible ? EyeSlash : Eye;
	const handlePress = () => onChange?.();

	if (!show) return null;

	return (
		<PressView className="w-5.5 h-5.5" disabled={disabled} onPress={handlePress} {...props}>
			<Icon strokeWidth={2} className={svgClassName} />
		</PressView>
	);
};

export { SeePassword, type SeePasswordProps };
