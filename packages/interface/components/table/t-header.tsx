import { Children, cloneElement, type ReactElement, type ReactNode } from "react";

import { TagView } from "interface/layout";

import type { TableProps } from "interface/components/table/table";

const THeader = ({ children }: TableProps) => (
	<TagView className="bg-neutral-200 py-2.5">
		{Children.map(children, (child: ReactNode) => cloneElement(child as ReactElement, { className: "flex-1 !text-neutral-500" }))}
	</TagView>
);

export { THeader };
