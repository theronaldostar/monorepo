import { cloneElement, Children, forwardRef, type ReactElement } from "react";
import { ScrollView } from "react-native";

import { useClass as clsx } from "@hooks/class";

import type { TableColors } from "ui/components/table/component";
import { Scroll, type TagViewProps } from "ui/layout/view";
import { defColor } from "ui/components/table/default";

interface BodyProps extends TagViewProps, TableColors {}

const Body = forwardRef<ScrollView, BodyProps>(({ children: $, colors, ...props }, ref) => {
	const { primary, secondary, text } = colors! || {};

	return (
		<Scroll style={{ borderBottomLeftRadius: 6, borderBottomRightRadius: 6 }} contentContainerClassName="rounded-b-md" ref={ref} {...props}>
			{Children.map($ as ReactElement, (child, key) => {
				const { className, ...rest } = child.props;
				const classNames = clsx(key % 2 === 0 ? secondary ?? defColor.secondary : primary ?? defColor.primary, className);
				return cloneElement(child, { className: classNames, text, ...rest });
			})}
		</Scroll>
	);
});

export { Body, type BodyProps };
