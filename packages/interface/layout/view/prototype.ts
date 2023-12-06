import getClass from "@config/hooks/class";

import type { TagViewProps } from "interface/layout/view/tag-view";

type classWrapProps = "half" | "full" | "none";

type classWrapSize = "height" | "width";

const classWrap = (version: classWrapSize) =>
	getClass(
		{
			height: {
				half: "h-1/2",
				full: "h-full",
				none: "h-0",
			},
			width: {
				half: "w-1/2",
				full: "w-full",
				none: "w-0",
			},
		},
		version,
	);

const overflowProp = (direction: TagViewProps["overflow"] = "auto") =>
	getClass(
		{
			auto: "overflow-auto",
			hidden: "overflow-hidden",
			scroll: "overflow-scroll",
		},
		direction,
	);

export { classWrap, overflowProp, type classWrapProps, type classWrapSize };
