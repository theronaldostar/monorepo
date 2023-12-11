import { useId, useRef, useState } from "react";
import { TextInput, type TextInputProps, type InputModeOptions } from "react-native";
import { StyledComponent } from "nativewind";

import { colors } from "@library/tailwindcss/theme.config";

import { useBuilder } from "@config/hooks";
import { Eye, EyeSlash, type IconProps } from "@library/heroicons";

import { Label } from "interface/components/label";
import { PressView, TagView } from "interface/layout";

type InputChange = (text: string) => void;

type InputIcon = {
	left?: IconProps;
	right?: IconProps;
};

type InputTypeProps = "search" | "text" | "email" | "numeric" | "password" | "tel";

type InputProps = {
	disabled?: boolean;
	icon?: InputIcon;
	label?: string;
	onChange?: InputChange;
	rounded?: boolean;
	type?: InputTypeProps;
} & TextInputProps;

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

	const [state, setState] = useState({
		focus: false,
		visible: type === "password",
		value,
	});

	const inputId = useId();
	const inputRef = useRef<TextInput>(null);

	const inputType = {
		text: "text",
		numeric: "numeric",
		tel: "tel",
		search: "search",
		email: "email",
		password: "none",
	}[type];

	const classContainer = useBuilder(
		"border items-center px-4 py-2.5 space-x-2",
		!disabled && state.focus ? "border-primary-900" : "border-neutral-400",
		disabled ? "cursor-default" : "cursor-text",
		rounded ? "rounded-full" : "rounded-lg",
	);
	const classIcon = useBuilder("cursor-default");
	const classLabel = useBuilder(disabled && "pointer-events-none cursor-default");
	const classInput = useBuilder("flex-1 outline-none text-neutral-600", disabled && "cursor-default");

	const SvgIcon = state.visible ? EyeSlash : Eye;

	const handleChange = (value: string): void => {
		onChange(value);
		setState(prev => ({ ...prev, value }));
	};

	const handlePress = (): void => inputRef.current?.focus();

	return (
		<TagView className="select-none space-y-1" direction="flex-col">
			{label && (
				<Label className={classLabel} onPress={handlePress}>
					{label}
				</Label>
			)}
			<PressView className={classContainer} onPress={handlePress}>
				{LeftIcon && <LeftIcon tw={classIcon} color={!disabled && state.focus ? colors.primary[900] : colors.neutral[400]} />}
				<StyledComponent
					component={TextInput}
					id={inputId}
					inputMode="text"
					onBlur={() => setState(prev => ({ ...prev, focus: false }))}
					onChangeText={handleChange}
					onFocus={() => setState(prev => ({ ...prev, focus: true }))}
					placeholderTextColor={colors.neutral[500]}
					readOnly={disabled}
					ref={inputRef}
					secureTextEntry={state.visible && type === "password"}
					tw={classInput}
					value={state.value}
					{...rest}
				/>
				{type === "password" && (
					<PressView disabled={disabled} onPress={() => setState(prev => ({ ...prev, visible: !prev.visible }))}>
						<SvgIcon color={colors.neutral[400]} strokeWidth={2} />
					</PressView>
				)}
				{RightIcon && <RightIcon tw={classIcon} color={colors.neutral[400]} />}
			</PressView>
		</TagView>
	);
};

export { Input, type InputChange, type InputIcon, type InputProps };
