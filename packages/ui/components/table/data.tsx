import { Label, type LabelProps } from "ui/components/label";
import type { TableColors } from "ui/components/table/component";
import { defaultColor } from "ui/components/table/default";
import { TagView } from "ui/layout";

import { clsx } from "utils";

interface DataProps extends LabelProps, TableColors {}

const Data = ({ className, text, ...props }: DataProps) => {
	const classNames = clsx("content-middle flex-1", className, text ?? defaultColor.text);

	return (
		<TagView className={classNames}>
			<Label align="center" truncate weight="semibold" {...props} />
		</TagView>
	);
};

export { Data, type DataProps };
