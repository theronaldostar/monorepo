/// <reference types="react-native/types" />
/// <reference types="nativewind/types" />

import type { MouseEvent } from "react";

declare module "react-native" {
	interface PressableStateCallbackType {
		hovered?: boolean;
		focused?: boolean;
	}

	interface ViewStyle {
		transitionProperty?: string;
		transitionDuration?: string;
	}

	interface TextProps {
		accessibilityComponentType?: never;
		accessibilityTraits?: never;
		accessibilityLevel?: number;
		href?: string;
		hrefAttrs?: {
			rel: "noreferrer";
			target?: "_blank";
		};
	}

	interface ViewProps {
		accessibilityRole?: string;
		href?: string;
		hrefAttrs?: {
			rel: "noreferrer";
			target?: "_blank";
		};
		onClick?: (event: MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
	}
}
