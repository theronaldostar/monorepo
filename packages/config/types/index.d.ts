/// <reference types="react-native/types" />
/// <reference types="nativewind/types" />

import type { MouseEvent } from "react";
import type { ScrollViewPropsAndroid, ScrollViewPropsIOS, Touchable, VirtualizedListProps } from "react-native";

declare module "react-native" {
	interface FlatListProps<ItemT> extends VirtualizedListProps<ItemT> {
		columnWrapperClassName?: string;
	}

	interface PressableStateCallbackType {
		hovered?: boolean;
		focused?: boolean;
	}

	interface ScrollViewProps extends ViewProps, ScrollViewPropsIOS, ScrollViewPropsAndroid, Touchable {
		contentContainerClassName?: string;
		indicatorClassName?: string;
	}

	interface TextInputProps {
		disabled?: boolean;
	}

	interface ViewProps {
		className?: string;
		accessibilityRole?: string;
		onClick?: (event: MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
	}
}

type ColorType = `#${string}` | `rgba(${number}, ${number}, ${number}, ${number})` | `hsl(${number}deg ${number}% ${number}%)`;

type Props = "text" | "bg";

type twColor = `${Props}-${string}-${number}` | `${Props}-[${ColorType}]`;

export type { ColorType, Props, twColor };
