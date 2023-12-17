import { useBuilder } from "@config/hooks";
import { Label } from "interface/components/label";

import type { TableProps } from "./component";

const TData = ({ className, ...props }: TableProps) => {
	const baseClass = useBuilder("flex-1 text-neutral-800", className);

	return <Label align="center" className={baseClass} weight="medium" {...props} />;
};

export { TData };
