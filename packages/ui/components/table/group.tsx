import { Children, cloneElement, forwardRef, type ReactElement } from "react";
import { View } from "react-native";

import { useClass } from "@hooks/class";

import type { TableColors } from "ui/components/table/component";
import { TagView, type TagViewProps } from "ui/layout/view";

interface GroupProps extends TagViewProps, TableColors {}

const Group = forwardRef<View, GroupProps>(({ children, className, text, ...props }, ref) => {
	const reactNode = Children.map(children as ReactElement, child => {
		const { className, ...rest } = child.props;
		return cloneElement(child, { className, text, ...rest });
	});

	const classNames = useClass("py-2", className);

	return (
		<TagView className={classNames} direction="row" ref={ref} {...props}>
			{reactNode}
		</TagView>
	);
});

export { Group, type GroupProps };
