import type { JSX } from "react";
import type { SvgProps } from "react-native-svg";

type IconProps = (props: SvgProps) => JSX.Element;

export * from "@lib/heroicons/icons";
export type { IconProps };
