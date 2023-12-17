import Svg, { Path, type SvgProps } from "react-native-svg";

const Check = (props: SvgProps) => (
	<Svg fill="none" viewBox="0 0 24 24" width={24} height={24} strokeWidth={2} stroke="currentColor" {...props}>
		<Path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
	</Svg>
);

export { Check };
