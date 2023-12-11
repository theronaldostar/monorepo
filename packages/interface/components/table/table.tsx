import type { ReactNode } from "react";

import { useBuilder } from "@config/hooks";
import { TagView } from "interface/layout";

type TableProps = {
	className?: string;
	children: ReactNode;
};

const Table = ({ className, ...props }: TableProps) => {
	const baseClass = useBuilder("flex-col w-full h-full", className);

	return <TagView className={baseClass} {...props} />;
};

export { Table, type TableProps };
