import { useBuilder } from "@config/hooks";

import { TagView } from "interface/layout";

import type { TableProps } from "interface/components/table/component";

const TGroup = ({ ...props }: TableProps) => {
	const { className, ...rest } = props;

	const presetClass = useBuilder("py-2.5", className);

	return <TagView className={presetClass} direction="flex-row" {...rest} />;
};

export { TGroup };
