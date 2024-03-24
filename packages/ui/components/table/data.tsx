import { useClass } from "@hooks/class";

import { Label, type LabelProps } from "ui/components/label";
import type { TableColors } from "ui/components/table/component";
import { defColor } from "ui/components/table/default";

interface DataProps extends LabelProps, TableColors {}

const Data = (props: DataProps) => {
	const { className, text, ...rest } = props;

	const classNames = useClass("flex-1", className, text ?? defColor.text);

	return <Label align="center" className={classNames} truncate weight="semibold" {...rest} />;
};

export { Data, type DataProps };
