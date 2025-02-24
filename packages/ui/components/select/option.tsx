import Label, { type LabelProps } from "ui/components/label";
import { option } from "ui/components/select/styles";
import { PressView } from "ui/layout";

interface OptionProps extends LabelProps {
	selected?: boolean;
	value: string;
}

const Option = ({ children, className, disabled, ...props }: OptionProps) => {
	const classNames = option({ className, disabled });

	return (
		<PressView className={classNames}>
			<Label children={children} leading="tight" size="lg" {...props} />
		</PressView>
	);
};

export { Option, type OptionProps };
