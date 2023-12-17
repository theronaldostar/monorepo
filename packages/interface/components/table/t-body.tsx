import { Children, cloneElement, type ReactElement } from "react";

import { useBuilder } from "@config/hooks";
import { TagView } from "interface/layout";

import type { TableProps } from "./component";

const TBody = ({ children }: TableProps) => {
	const childrenWithColor = Children.map(children, (child, i) => {
		const groupStyle = i % 2 === 0 ? "bg-neutral-400" : "bg-neutral-200";

		return cloneElement(child as ReactElement, { className: groupStyle });
	});

	const baseClass = useBuilder("flex-col overflow-y-auto");

	return (
		<TagView className={baseClass}>
			<>{childrenWithColor}</>
		</TagView>
	);
};

export { TBody };
