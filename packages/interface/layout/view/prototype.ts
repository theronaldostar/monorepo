import getClass from "@config/hooks/class";

import type { TagViewProps } from "./tag-view";

const overflowProp = (direction: TagViewProps["overflow"] = "auto") =>
	getClass(
		{
			auto: "overflow-auto",
			hidden: "overflow-hidden",
			scroll: "overflow-scroll",
		},
		direction,
	);

export { overflowProp };
