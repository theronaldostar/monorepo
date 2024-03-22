import { Children, cloneElement, forwardRef, type ReactElement } from "react";
import { View } from "react-native";

import { useClass } from "@config/hooks";
import type { TableColors } from "ui/components/table/component";
import { TagView, type TagViewProps } from "ui/layout/view";

interface GroupProps extends TagViewProps, TableColors {}

const Group = forwardRef<View, GroupProps>((props, ref) => {
	const { children: $, className, text, ...rest } = props;

	const children = Children.map($ as ReactElement, child => {
		const { className, ...rest } = child.props;
		return cloneElement(child, { className, text, ...rest });
	});

	const classNames = useClass("py-2", className);

	return (
		<TagView className={classNames} direction="row" ref={ref} {...rest}>
			{children}
		</TagView>
	);
});

export { Group, type GroupProps };
