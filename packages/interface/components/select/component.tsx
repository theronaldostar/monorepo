import { Children, useState, useEffect, type ReactElement, type ReactNode } from "react";

import { ChevronDown, ChevronUp } from "@library/heroicons";

import { colors } from "@library/tailwindcss/theme.config";
import { Label } from "interface/components/label";
import { PressView, Scroll, TagView } from "interface/layout";

import { Group } from "./group";
import { Option } from "./option";

interface SelectProps {
	onChange: (value: string) => void;
	children: ReactNode;
	placeholder?: string;
}

const Select = (props: SelectProps) => {
	const { children, onChange, placeholder = "Select an option" } = props;

	const [state, setState] = useState({
		open: false,
		value: "",
	});

	useEffect(() => {
		let initialValue = "";
		Children.map(children as ReactElement, (child: ReactElement) => {
			if (child?.type === Option) {
				const { value, selected } = child.props;

				if (selected) initialValue = value;
			} else if (child?.type === Group) {
				Children.map(child.props.children, (groupChild: ReactElement) => {
					if (groupChild && groupChild.type === Option) {
						const { value, selected } = groupChild.props;
						if (selected) initialValue = value;
					}
				});
			}
		});
		setState(prev => ({ ...prev, value: initialValue }));
	}, [children]);

	const Chevron = state.open ? ChevronUp : ChevronDown;

	const handleToggle = () => setState(prev => ({ ...prev, open: !prev.open }));

	const handleText = (value: string, children: ReactNode) => {
		let optionText = null;
		Children.map(children as ReactElement, ({ props, type }: ReactElement) => {
			if (type === Option && props.value === value) {
				optionText = props.children as ReactNode;
			} else if (type === Group) {
				Children.map(props.children, ({ props, type }: ReactElement) => {
					if (type === Option && props.value === value) optionText = props.children as ReactNode;
				});
			}
		});
		return optionText;
	};

	const ScrollOption = ({ children, value }: { children: ReactNode; value: string }) => {
		const selected = value === state.value;

		const handleSelect = (value: string) => {
			setState(prev => ({ ...prev, open: !prev.open, value }));
			onChange(value);
		};

		return (
			<Option onPress={handleSelect} selected={selected} value={value}>
				{handleText(value, children)}
			</Option>
		);
	};

	return (
		<TagView className="relative z-50 space-y-2.5 rounded-md" direction="flex-col">
			<PressView className="items-center justify-between space-x-2.5 rounded-md border border-neutral-400 bg-neutral-200 p-2.5" onPress={handleToggle}>
				<Label className="text-neutral-400">{state.value ? handleText(state.value, children) : placeholder}</Label>
				<Chevron color={colors.neutral[600]} strokeWidth={3} />
			</PressView>
			{state.open && (
				<TagView className="h-52 w-full rounded-md border border-neutral-400 bg-neutral-200 py-2">
					<Scroll>
						{Children.map(children as ReactElement, (child: ReactElement) => {
							if (child?.type === Option) {
								const { value } = child.props;

								return <ScrollOption value={value}>{children}</ScrollOption>;
							} else if (child?.type === Group) {
								const { children: groupChildren, title } = child.props;

								return (
									<Group title={title}>
										{Children.map(groupChildren, (groupChild: ReactElement) => {
											if (groupChild && groupChild.type === Option) {
												const { value } = groupChild.props;

												return <ScrollOption value={value}>{children}</ScrollOption>;
											}
										})}
									</Group>
								);
							}
						})}
					</Scroll>
				</TagView>
			)}
		</TagView>
	);
};

export { Select, type SelectProps };
