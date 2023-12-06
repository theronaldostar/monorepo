import { useBuilder } from "@config/hooks";

import { TagView } from "interface/layout";

import type { TableProps } from "interface/components/table/table";

const TGroup = ({ className = "", ...props }: TableProps) => {
	const baseClass = useBuilder("py-2.5", className);
	return <TagView className={baseClass} direction="flex-row" {...props} />;
};

export { TGroup };
