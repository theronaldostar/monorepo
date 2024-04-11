import { useClass } from "@hooks/class";

import { Label, type LabelProps } from "ui/components/label";
import type { TableColors } from "ui/components/table/component";
import { defColor } from "ui/components/table/default";

interface DataProps extends LabelProps, TableColors {}

const Data = ({ className, text, ...props }: DataProps) => {
	const classNames = useClass("flex-1", className, text ?? defColor.text);

	return <Label align="center" className={classNames} truncate weight="semibold" {...props} />;
};

export { Data, type DataProps };
