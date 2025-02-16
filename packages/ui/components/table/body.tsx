import { cloneElement, Children, forwardRef } from "react";
import { ScrollView } from "react-native";

import type { TableColors } from "ui/components/table/component";
import { Scroll, type TagViewProps } from "ui/layout/view";
import { defColor } from "ui/components/table/default";

import { clsx } from "utils";

import type { ChildrenProps } from ".";

interface BodyProps extends TagViewProps, TableColors {}

const Body = forwardRef<ScrollView, BodyProps>(({ children, colors, ...props }, ref) => {
	const { primary, secondary, text } = colors! || {};

	return (
		<Scroll style={{ borderBottomLeftRadius: 6, borderBottomRightRadius: 6 }} contentContainerClassName="rounded-b-md" ref={ref} {...props}>
			{Children.map(children as ChildrenProps, (child, key) => {
				const { className, ...rest } = child.props;
				const classNames = clsx(key % 2 === 0 ? (secondary ?? defColor.secondary) : (primary ?? defColor.primary), className);
				return cloneElement(child, { className: classNames, text, ...rest });
			})}
		</Scroll>
	);
});

export { Body, type BodyProps };
