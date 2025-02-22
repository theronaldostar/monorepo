import Svg, { Path, type SvgProps } from "react-native-svg";

const ChevronUp = (props: SvgProps) => (
	<Svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
		<Path d="m18 15-6-6-6 6" />
	</Svg>
);

export { ChevronUp };
