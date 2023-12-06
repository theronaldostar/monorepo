import type { ReactNode } from "react";

import { Label } from "interface/components/label";
import { TagView } from "interface/layout";

interface GroupProps {
	title: string;
	children: ReactNode;
}

const Group = ({ children, title }: GroupProps) => (
	<TagView direction="flex-col">
		<Label className="mx-2.5 !text-neutral-400" weight="bold">
			<>{title}!</>
		</Label>
		<>{children}</>
	</TagView>
);

export { Group, type GroupProps };
