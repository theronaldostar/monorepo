import Svg, { Path, type SvgProps } from "react-native-svg";

const Check = (props: SvgProps) => (
	<Svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
		<Path d="M20 6 9 17l-5-5" />
	</Svg>
);

export { Check };
