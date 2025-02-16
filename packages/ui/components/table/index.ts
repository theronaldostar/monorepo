import type { ReactElement } from "react";

import { Table } from "ui/components/table/component";
import type { TagViewProps } from "ui/layout/view";

import type { TableColors } from "ui/components/table/component";

export interface ChildrenProps extends ReactElement<TagViewProps & TableColors> {
	text?: string;
	value?: unknown;
}

export default Table;
export * from "ui/components/table/body";
export * from "ui/components/table/component";
export * from "ui/components/table/data";
export * from "ui/components/table/default";
export * from "ui/components/table/group";
export * from "ui/components/table/header";
