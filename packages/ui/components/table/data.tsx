import { useClass } from "@hooks/class";

import { TagView } from "ui/layout";

import { Label, type LabelProps } from "ui/components/label";
import type { TableColors } from "ui/components/table/component";
import { defColor } from "ui/components/table/default";

interface DataProps extends LabelProps, TableColors {}

const Data = ({ className, text, ...props }: DataProps) => {
	const classNames = useClass("content-middle flex-1", className, text ?? defColor.text);

	return (
		<TagView className={classNames}>
			<Label align="center" truncate weight="semibold" {...props} />
		</TagView>
	);
};

export { Data, type DataProps };
