import { Children, cloneElement } from "react";

import type { ChildrenProps } from "ui/components/table";
import type { TableColors } from "ui/components/table/component";
import { TagView, type TagViewProps } from "ui/layout/view";

import { clsx } from "utils";

interface GroupProps extends TagViewProps, TableColors {}

const Group = ({ children, className, text, ...props }: GroupProps) => {
	const reactNode = Children.map(children as ChildrenProps, child => {
		const { className, ...rest } = child.props;
		return cloneElement(child, { className, text, ...rest });
	});

	const classNames = clsx("py-2", className);

	return <TagView children={reactNode} className={classNames} direction="row" {...props} />;
};

export { Group, type GroupProps };
