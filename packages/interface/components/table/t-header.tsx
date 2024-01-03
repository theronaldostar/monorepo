import { Children, cloneElement, type ReactElement, type ReactNode } from "react";

import { useBuilder } from "@config/hooks";
import { TagView } from "interface/layout";

import type { TableProps } from "interface/components/table/component";

const THeader = ({ children }: TableProps) => {
	const presetClass = useBuilder("flex-1 !text-neutral-500");

	return (
		<TagView className="bg-neutral-200 py-2.5">
			{Children.map(children, (child: ReactNode) => cloneElement(child as ReactElement, { className: presetClass }))}
		</TagView>
	);
};

export { THeader };
