import { useRef, useState } from "react";
import { TextInput, type InputModeOptions } from "react-native";
import { StyledComponent } from "nativewind";

import useClass, { useBuilder } from "@config/hooks/class";
import { Eye, EyeSlash, type IconProps } from "@library/heroicons";
import { colors } from "@library/tailwindcss/theme.config";

import { Label } from "interface/components/label";
import { PressView, TagView } from "interface/layout";

type ChangeProps = "focus" | "show";

type InputChange = (text: string) => void;

type InputIcon = {
	left?: IconProps;
	right?: IconProps;
};

type InputTypeProps = "search" | "text" | "email" | "numeric" | "password" | "tel";

interface InputProps {
	disabled?: boolean;
	icon?: InputIcon;
	label?: string;
	onChange?: InputChange;
	placeholder?: string;
	rounded?: boolean;
	type?: InputTypeProps;
	value?: string;
}

const Input = (props: InputProps) => {
	const {
		disabled = false,
		icon = { left: null, right: null },
		label = null,
		onChange = () => null,
		rounded = false,
		type = "text",
		value = "",
		...rest
	} = props;

	const { left: LeftIcon, right: RightIcon } = icon;

	const inputRef = useRef<TextInput>(null);

	const [state, setState] = useState({
		focus: false,
		show: false,
		value,
	});

	const classContainer = useBuilder(
		"border items-center px-4 py-2.5 space-x-2",
		!disabled && state.focus ? "border-primary-900" : "border-neutral-400",
		disabled ? "cursor-default" : "cursor-text",
		rounded ? "rounded-full" : "rounded-lg",
	);
	const classIcon = useBuilder("cursor-default");
	const classInput = useBuilder("flex-1 outline-none text-neutral-600", disabled && "cursor-default");

	const SvgIcon = state.show ? Eye : EyeSlash;

	const handleChange = (index: ChangeProps) => setState(prev => ({ ...prev, [index]: !prev[index] }));

	const handleFocus = () => inputRef.current?.focus();

	const inputMode = useClass(
		{
			text: "text",
			numeric: "numeric",
			tel: "tel",
			search: "search",
			email: "email",
			password: "none",
		},
		type,
	);

	return (
		<TagView className="select-none space-y-1" direction="flex-col">
			{label && (
				<Label className={(disabled && "pointer-events-none cursor-default") as string} onPress={handleFocus}>
					{label}
				</Label>
			)}
			<PressView className={classContainer} onPress={handleFocus}>
				{LeftIcon && <LeftIcon tw={classIcon} color={!disabled && state.focus ? colors.primary[900] : colors.neutral[400]} />}
				<StyledComponent
					component={TextInput}
					editable={!disabled}
					inputMode={inputMode as InputModeOptions}
					onChangeText={onChange}
					onFocus={() => handleChange("focus")}
					onBlur={() => handleChange("focus")}
					placeholderTextColor={colors.neutral[500]}
					ref={inputRef}
					secureTextEntry={!state.show && type === "password"}
					tw={classInput}
					{...rest}
				/>
				{RightIcon && <RightIcon tw={classIcon} color={colors.neutral[400]} />}
				{type === "password" && (
					<PressView disabled={disabled} onPress={() => handleChange("show")}>
						<SvgIcon color={colors.neutral[400]} strokeWidth={2} />
					</PressView>
				)}
			</PressView>
		</TagView>
	);
};

export { Input, type InputChange, type InputIcon, type InputProps };
