import type { SvgProps } from "react-native-svg";

type NativewindRestProps = {
	className?: string;
	tw?: string;
};

type IconProps = (props: SvgProps & NativewindRestProps) => JSX.Element;

export * from "./icons";
export { type IconProps };
