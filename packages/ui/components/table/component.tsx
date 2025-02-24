import { cloneElement, Children, forwardRef } from "react";
import { View } from "react-native";

import type { ChildrenProps } from "ui/components/table";
import { TagView, type TagViewProps } from "ui/layout/view";

import { clsx } from "utils";

type TableColors = {
	colors?: { primary?: string; secondary?: string; text?: string };
	text?: string;
};

interface TableProps extends TagViewProps, TableColors {}

const Table = forwardRef<View, TableProps>(({ children, className, colors, ...props }, ref) => {
	const classNames = clsx("", className);

	const reactNode = Children.map(children as ChildrenProps, child => {
		const { className, ...rest } = child.props;
		return cloneElement(child, { className, colors, ...rest });
	});

	return <TagView children={reactNode} className={classNames} ref={ref} {...props} />;
});

export default Table;
export { Table, type TableColors, type TableProps };
