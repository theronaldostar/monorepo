import type { MouseEvent } from "react";
import "react-native";
import "nativewind/types.d";

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

type Size = "half" | "full" | "none";

const WidthClassWrap: Record<Size, string> = {
	half: "w-1/2",
	full: "w-full",
	none: "w-0",
};

const HeightClassWrap: Record<Size, string> = {
	half: "h-1/2",
	full: "h-full",
	none: "h-0",
};

export { type Size, HeightClassWrap, WidthClassWrap };
