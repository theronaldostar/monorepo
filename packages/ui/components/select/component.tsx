import { Children, cloneElement, forwardRef, isValidElement, useEffect, useState, type ReactElement } from "react";
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

type ChildrenProps = ReactElement<ChildProps>;

type StateProps = {
	open: boolean;
	selected: { title: string | null; value: string | null };
};

interface SelectProps extends TagViewProps {
	icon?: IconProps;
	label?: string;
	menuClassName?: string;
	onChange: (value: string) => void;
	placeholder?: string;
}

const Select = forwardRef<View, SelectProps>(({ children, className, icon, menuClassName, onChange, placeholder, ...props }, ref) => {
	const [state, setState] = useState<StateProps>({
		open: false,
		selected: { title: null, value: null },
	});

	useEffect(() => {
		Children.map(children as ChildrenProps, ({ type, props }) => {
			if (type === Option) handleChild().dispatch(props);
			if (type === OptGroup) {
				Children.toArray(props.children).map(child => {
					if (!isValidElement<ChildProps>(child)) return null;
					const { type, props } = child;
					if (type === Option) handleChild().dispatch(props);
				});
			}
		});
	}, [children]);

	const classNames = clsx("gap-2", className);
	const menuClass = menu({ className: menuClassName });

	const handleChild = () => {
		const active = (value: string) => {
			if (value !== state.selected.value) return "";
			return "bg-sky-200 dark:bg-sky-600 pointer-events-none";
		};

		const handlePress = (child: string, value: string) => {
			onChange?.(value);
			setState({ open: false, selected: { title: child, value } });
		};

		type CloneProps = { child: ChildrenProps; title: string; value: string };

		const createClone = ({ child, title, value, ...rest }: CloneProps) => {
			return cloneElement(child, {
				className: active(value),
				onPress: () => handlePress(title, value),
				...rest,
			});
		};

		const element = (child: ChildrenProps) => {
			const {
				props: { children, value, ...rest },
				type,
			} = child;

			if (type === Option) return createClone({ child, title: children, value, ...rest });

			if (type === OptGroup)
				return cloneElement(
					child,
					{ ...rest },
					Children.toArray(children).map(nestedChild => {
						if (!isValidElement<ChildProps>(nestedChild)) return;
						const { children: nestedContent, value, ...rest } = nestedChild.props;
						return createClone({ child: nestedChild, title: nestedContent, value, ...rest });
					}),
				);
		};

		const dispatch = (props: ChildProps) => {
			const { children: title, selected, value } = props;
			if (selected) setState(prev => ({ ...prev, selected: { title, value } }));
		};

		return { element, dispatch };
	};

	return (
		<TagView className={classNames} ref={ref} {...props}>
			<Dropdown placeholder={placeholder || "Select an option"} state={state} setState={setState} svgIcon={icon} />
			{state.open && (
				<Scroll className={menuClass} contentContainerClassName="gap-1">
					{Children.map(children, child => {
						if (!isValidElement<ChildProps>(child)) return;
						return handleChild().element(child);
					})}
				</Scroll>
			)}
		</TagView>
	);
});

export { Select, type SelectProps, type StateProps };
