import { Children, cloneElement, forwardRef, useEffect, useState, type ReactElement } from "react";
import { View } from "react-native";

import { useClass } from "@hooks/class";
import type { IconProps } from "@lib/heroicons";

import { menu } from "ui/components/select/class";
import OptGroup from "ui/components/select/opt-group";
import Option from "ui/components/select/option";
import { Scroll, TagView, type TagViewProps } from "ui/layout";

import { SelectGroup } from "ui/components/select/group";

type StateProps = {
	open: boolean;
	selected: {
		string: null | string;
		value: null | string;
	};
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

const Select = forwardRef<View, SelectProps>(({ children, className, icon, onChange, placeholder = "Select an option", ...rest }, ref) => {
	const [state, setState] = useState<StateProps>({
		open: false,
		selected: {
			string: null,
			value: null,
		},
	});

	useEffect(() => {
		const updateFromChildren = () => {
			Children.map(children as ReactElement, ({ props, type }) => {
				if (type === Option) getChild.$state(props);

				if (type === OptGroup)
					Children.map(props.children as ReactElement, ({ props, type }) => {
						if (type === Option) getChild.$state(props);
					});
			});
		};

		updateFromChildren();
		return () => {};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [children]);

	const handlePress = (child: string, value: string) => {
		onChange?.(value);
		setState(prev => ({ ...prev, open: false, selected: { string: child, value } }));
	};

	const classNames = useClass("gap-2", className);
	const menuClassName = menu({ className: "" });

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

	return (
		<TagView className={classNames} ref={ref} {...rest}>
			<SelectGroup onPress={setState} placeholder={placeholder} state={state} svgIcon={icon} />
			{state.open && (
				<Scroll className={menuClassName} contentContainerClassName="gap-2 p-2">
					{Children.map(children as ReactElement, child => getChild.element(child))}
				</Scroll>
			)}
		</TagView>
	);
});

export { Select, type SelectProps, type StateProps };
