import { Children, cloneElement, type ReactElement, type ReactNode } from "react";

import { useBuilder } from "@config/hooks";
import { TagView } from "interface/layout";

import type { TableProps } from "./component";

const THeader = ({ children }: TableProps) => {
	const baseClass = useBuilder("flex-1 !text-neutral-500");

	return (
		<TagView className="bg-neutral-200 py-2.5">
			{Children.map(children, (child: ReactNode) => cloneElement(child as ReactElement, { className: baseClass }))}
		</TagView>
	);
};

export { THeader };
