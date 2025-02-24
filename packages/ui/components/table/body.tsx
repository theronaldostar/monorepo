import { cloneElement, Children } from "react";

import type { ChildrenProps } from "ui/components/table";
import type { TableColors } from "ui/components/table/component";
import { theme } from "ui/components/table/styles";
import { Scroll, type TagViewProps } from "ui/layout/view";

import { clsx } from "utils";

interface BodyProps extends TagViewProps, TableColors {}

const Body = ({ children, colors, ...props }: BodyProps) => {
	const { primary, secondary, text } = colors! || {};

	return (
		<Scroll style={{ borderBottomLeftRadius: 6, borderBottomRightRadius: 6 }} contentContainerClassName="rounded-b-md" {...props}>
			{Children.map(children as ChildrenProps, (child, key) => {
				const { className, ...rest } = child.props;
				const classNames = clsx(key % 2 === 0 ? (secondary ?? theme.secondary) : (primary ?? theme.primary), className);
				return cloneElement(child, { className: classNames, text, ...rest });
			})}
		</Scroll>
	);
};

export { Body, type BodyProps };
