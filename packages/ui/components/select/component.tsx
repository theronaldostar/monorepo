import { Children, cloneElement, forwardRef, useEffect, useState, type ReactNode, type ReactElement } from "react";
import { View } from "react-native";

import type { IconProps } from "@lib/lucide";

import { OptGroup } from "ui/components/select/opt-group";
import { Option, type OptionProps } from "ui/components/select/option";
import { Dropdown } from "ui/components/select/dropdown";
import { menu } from "ui/components/select/styles";
import { Scroll, TagView, type TagViewProps } from "ui/layout";

import { clsx } from "utils";

interface ChildProps extends OptionProps {
	children: string;
	selected: boolean;
	value: string;
}

type StateProps = {
	open: boolean;
	selected: { title: string; value: string };
};

interface SelectProps extends TagViewProps {
	icon?: IconProps;
	label?: string;
	menuClassName?: string;
	onChange: (value: string) => void;
	placeholder?: string;
}

const isReactElement = (child: ReactNode): child is ReactElement => typeof child === "object" && child !== null && "type" in child;

const Select = forwardRef<View, SelectProps>(({ children, className, icon, menuClassName, onChange, placeholder, ...props }, ref) => {
	const [state, setState] = useState<StateProps>({
		open: false,
		selected: { title: "", value: "" },
	});

	useEffect(() => {
		Children.map(children as ReactElement<ChildProps>, ({ type, props }) => {
			if (type === Option) handleChild().dispatch(props);
			if (type === OptGroup) {
				if (isReactElement(props.children)) {
					Children.map(props.children as ReactElement<ChildProps>, ({ type, props }) => {
						if (type === Option) handleChild().dispatch(props);
					});
				}
			}
		});
	}, [children]);

	const classNames = clsx("gap-2", className);
	const menuClass = menu({ className: menuClassName });

	const handleChild = () => {
		const isActive = (value: string) => {
			if (value !== state.selected.value) return;
			return "bg-sky-200 dark:bg-sky-600 pointer-events-none";
		};

		const handlePress = (child: string, value: string) => {
			onChange?.(value);
			setState(prev => ({ ...prev, open: false, selected: { title: child, value } }));
		};

		const element = (child: ReactElement<ChildProps>) => {
			const {
				props: { children, value, ...restMain },
				type,
			} = child;

			if (type === Option) {
				return cloneElement(child, {
					className: isActive(value),
					onPress: () => handlePress(children, value!),
					...restMain,
				});
			} else if (type === OptGroup) {
				if (isReactElement(children)) {
					return cloneElement(
						child,
						{ ...restMain },
						Children.map(children as ReactElement<OptionProps>, child => {
							const { children: nestedChild, value, ...rest } = child.props;
							return cloneElement(child, { className: isActive(value), onPress: () => handlePress(nestedChild as string, value), ...rest });
						}),
					);
				}
			}
		};

		const dispatch = (props: ChildProps) => {
			const { children: title, selected, value } = props;
			if (selected) setState(prev => ({ ...prev, selected: { title, value } }));
		};

		return { element, dispatch };
	};

	return (
		<TagView className={classNames} ref={ref} {...props}>
			<Dropdown onPress={setState} placeholder={placeholder ?? "Select an option"} state={state} svgIcon={icon} />
			{state.open && (
				<Scroll className={menuClass} contentContainerClassName="gap-2 p-2">
					{Children.map(children, child => handleChild().element(child as ReactElement<ChildProps>))}
				</Scroll>
			)}
		</TagView>
	);
});

export { Select, type SelectProps, type StateProps };
