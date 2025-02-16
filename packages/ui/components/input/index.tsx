import { useId, useRef, useState } from "react";
import { TextInput, type TextInputProps, type InputModeOptions } from "react-native";

import type { IconProps } from "@lib/heroicons";

import { PressView, TagView } from "ui/layout/view";
import { input, group, svg, texTitle } from "ui/components/input/styles";
import { SeePassword } from "ui/components/input/see-password";
import { Label } from "ui/components/label";

type InputTypeProps = InputModeOptions | "password";

type InputIcon = {
	left?: IconProps;
	right?: IconProps;
};

interface InputProps extends TextInputProps {
	disabled?: boolean;
	icon?: InputIcon;
	iconClassName?: string;
	textClassName?: string;
	title?: string;
	titleClassName?: string;
	type?: InputTypeProps;
}

const Input = ({ className, disabled, icon, iconClassName, textClassName, onChangeText, type, title, titleClassName, value = "", ...props }: InputProps) => {
	const { left, right } = icon! || {};

	const visible = type === "password";

	const [state, setState] = useState({
		focus: false,
		visible,
		value,
	});

	const id = useId();
	const ref = useRef<TextInput>(null);

	const classNames = group({ className, disabled, focus: state.focus });
	const inputClass = input({ className: textClassName, disabled });
	const svgClass = svg({ className: iconClassName, focus: state.focus });
	const titleClass = texTitle({ className: titleClassName, disabled });

	const handleChange = (value: string) => {
		setState(prev => ({ ...prev, value }));
		onChangeText?.(value);
	};

	const handleFocus = () => {
		if (!disabled) ref.current?.focus();
	};

	const handleVisible = () => setState(prev => ({ ...prev, visible: !prev.visible }));

	return (
		<TagView className="min-w-64 max-w-full gap-2">
			{title && (
				<Label className={titleClass} onPress={handleFocus}>
					{title}
				</Label>
			)}

			<PressView disabled={disabled} className={classNames} onPress={handleFocus}>
				{left?.({ className: svgClass })}

				<TextInput
					className={inputClass}
					enterKeyHint="next"
					id={id}
					inputMode={type === "password" ? "text" : type}
					onBlur={() => setState(prev => ({ ...prev, focus: false }))}
					onChangeText={handleChange}
					onFocus={() => setState(prev => ({ ...prev, focus: true }))}
					readOnly={disabled}
					ref={ref}
					secureTextEntry={state.visible && type === "password"}
					value={state.value}
					{...props}
				/>

				<TagView className="gap-3" direction="row">
					<SeePassword disabled={disabled} onChange={handleVisible} show={visible} svgClassName={svgClass} visible={state.visible} />
					{right?.({ className: svgClass })}
				</TagView>
			</PressView>
		</TagView>
	);
};

export default Input;
export { Input, type InputProps, type InputTypeProps };
