import Svg, { Path, type SvgProps } from "react-native-svg";

const ChevronDown = (props: SvgProps) => (
	<Svg fill="none" viewBox="0 0 24 24" width={24} height={24} strokeWidth={1.5} stroke="currentColor" {...props}>
		<Path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
	</Svg>
);

export { ChevronDown };
