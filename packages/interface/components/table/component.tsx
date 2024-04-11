import { cloneElement, Children, forwardRef, type ReactElement } from "react";
import { View } from "react-native";

import { useClass } from "@hooks/class";

import { TagView, type TagViewProps } from "ui/layout/view";

type TableColors = {
	colors?: { primary?: string; secondary?: string; text?: string };
	text?: string;
};

interface TableProps extends TagViewProps, TableColors {}

const Table = forwardRef<View, TableProps>(({ children, className, colors, ...props }, ref) => {
	const classNames = useClass("", className);

	const reactNode = Children.map(children as ReactElement, child => {
		const { className, ...rest } = child.props;
		return cloneElement(child, { className, colors, ...rest });
	});

	return (
		<TagView className={classNames} ref={ref} {...props}>
			{reactNode}
		</TagView>
	);
});

export default Table;
export { Table, type TableColors, type TableProps };
