import { useBuilder } from "@config/hooks";

import { TagView } from "interface/layout";

import type { TableProps } from "./table";

const TGroup = ({ ...props }: TableProps) => {
	const { className, ...rest } = props;

	const baseClass = useBuilder("py-2.5", className);

	return <TagView className={baseClass} direction="flex-row" {...rest} />;
};

export { TGroup };
