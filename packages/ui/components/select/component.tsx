import { Children, cloneElement, forwardRef, useEffect, useId, useState, type Dispatch, type ReactElement, type SetStateAction } from "react";
import { View } from "react-native";

import { ChevronDown, ChevronUp, type IconProps } from "@lib/heroicons";
import { useClass } from "@hooks/class";

import Label from "ui/components/label";
import { element, icon, menu, text } from "ui/components/select/class";
import OptGroup from "ui/components/select/opt-group";
import Option from "ui/components/select/option";
import { PressView, Scroll, TagView, type TagViewProps } from "ui/layout";

type StateProps = {
	open: boolean;
	selected: {
		string: null | string;
		value: null | string;
	};
};

type ContainerProps = {
	onPress: Dispatch<SetStateAction<StateProps>>;
};

type getChildProps = {
	children: string;
	id: string;
	selected: boolean;
	value: string;
};

interface SelectProps extends TagViewProps {
	icon?: IconProps;
	label?: string;
	menuClassName?: string;
	onChange: (value: string) => void;
	placeholder?: string;
}

const Select = forwardRef<View, SelectProps>(({ children, className, icon: svgIcon, onChange, placeholder = "Select an option", ...rest }, ref) => {
	const id = useId();

	const [state, setState] = useState<StateProps>({
		open: false,
		selected: {
			string: null,
			value: null,
		},
	});

	useEffect(() => {
		Children.map(children as ReactElement, ({ props, type }) => {
			if (type === Option) getChild.$state(props);

			if (type === OptGroup) {
				Children.map(props.children as ReactElement, ({ props, type }) => {
					if (type === Option) getChild.$state(props);
				});
			}
		});

		return () => {};
	}, [children]);

	const classNames = useClass("gap-2", className);
	const menu_className = menu({ className: "" });

	const getChild = (() => {
		const isActive = (value: string) => {
			if (value !== state.selected.value) return;
			return "bg-sky-200 dark:bg-sky-600 pointer-events-none";
		};

		const element = (child: ReactElement) => {
			const {
				props: { children, value, ...$rest },
				type,
			} = child;

			if (type === Option) {
				return cloneElement(child, { className: isActive(value), onPress: () => handlePress(children, value), ...$rest });
			} else if (type === OptGroup) {
				return cloneElement(
					child,
					{ ...$rest },
					Children.map(children as ReactElement, child => {
						const { children: $children, value: $value, ...rest } = child.props;
						return cloneElement(child, { className: isActive($value), onPress: () => handlePress($children, $value), ...rest });
					}),
				);
			}
		};

		const $state = (props: getChildProps) => {
			const { children: string, selected, value } = props;
			if (selected) setState(prev => ({ ...prev, selected: { string, value } }));
		};

		return { element, $state };
	})();

	const Container = ({ onPress }: ContainerProps) => {
		const Chevron = state.open ? ChevronUp : ChevronDown;

		const element_className = element({ className: "" });
		const icon_className = icon({ className: "" });
		const text_className = text({ className: "select-none" });

		return (
			<PressView className={element_className} onPress={() => onPress(prev => ({ ...prev, open: !prev.open }))}>
				<TagView className="items-center gap-2" direction="row">
					{svgIcon?.({ className: icon_className, strokeWidth: 2 })}
					<Label className={text_className} size="lg">
						{state.selected.string ?? placeholder}
					</Label>
				</TagView>
				<Chevron className={icon_className} strokeWidth={3} />
			</PressView>
		);
	};

	const handlePress = (child: string, value: string) => {
		onChange?.(value);
		setState(prev => ({ ...prev, open: false, selected: { string: child, value } }));
	};

	return (
		<TagView className={classNames} id={id} ref={ref} {...rest}>
			<Container onPress={setState} />
			{state.open && (
				<Scroll className={menu_className} contentContainerClassName="gap-2 p-2">
					{Children.map(children as ReactElement, child => getChild.element(child))}
				</Scroll>
			)}
		</TagView>
	);
});

export { Select, type SelectProps };
