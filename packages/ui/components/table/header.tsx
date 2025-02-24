import { Children, cloneElement } from "react";

import type { ChildrenProps } from "ui/components/table";
import type { TableColors } from "ui/components/table/component";
import { theme } from "ui/components/table/styles";
import { TagView, type TagViewProps } from "ui/layout/view";

import { clsx } from "utils";

interface HeaderProps extends TagViewProps, TableColors {
	bgClass?: string;
	dataClass?: string;
}

const Header = ({ bgClass, className, children, colors, dataClass, ...props }: HeaderProps) => {
	const { primary, text } = colors! || {};

	const classNames = clsx("px-1 py-2 web:sticky rounded-t-md", bgClass ?? primary ?? theme.primary, className);

	const reactNode = Children.map(children as ChildrenProps, child => {
		const { className, ...rest } = child.props;
		return cloneElement(child, { className, text: dataClass ?? text, ...rest });
	});

	return <TagView children={reactNode} className={classNames} direction="row" {...props} />;
};

export { Header, type HeaderProps };
