import { Children, cloneElement, forwardRef } from "react";
import { View } from "react-native";

import type { ChildrenProps } from "ui/components/table";
import type { TableColors } from "ui/components/table/component";
import { defaultColor } from "ui/components/table/default";
import { TagView, type TagViewProps } from "ui/layout/view";

import { clsx } from "utils";

interface HeaderProps extends TagViewProps, TableColors {
	bgClass?: string;
	dataClass?: string;
}

const Header = forwardRef<View, HeaderProps>(({ bgClass, className, children, colors, dataClass, ...props }, ref) => {
	const { primary, text } = colors! || {};

	const classNames = clsx("px-1 py-2 web:sticky rounded-t-md", bgClass ?? primary ?? defaultColor.primary, className);

	const reactNode = Children.map(children as ChildrenProps, child => {
		const { className, ...rest } = child.props;
		return cloneElement(child, { className, text: dataClass ?? text, ...rest });
	});

	return (
		<TagView className={classNames} direction="row" ref={ref} {...props}>
			{reactNode}
		</TagView>
	);
});

export { Header, type HeaderProps };
