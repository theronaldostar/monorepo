import { useBuilder } from "@config/hooks";
import { Label } from "interface/components/label";

import type { TableProps } from "interface/components/table/component";

const TData = ({ className, ...props }: TableProps) => {
	const presetClass = useBuilder("flex-1 text-neutral-800", className);

	return <Label align="center" className={presetClass} weight="medium" {...props} />;
};

export { TData };
