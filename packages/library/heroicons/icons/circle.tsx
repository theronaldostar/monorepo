import Svg, { Circle as SvgCircle, type SvgProps } from "react-native-svg";

const Circle = (props: SvgProps) => (
	<Svg height={24} width={24} viewBox="0 0 24 24" {...props}>
		<SvgCircle cx={12} cy={12} r={8} fill="currentColor" />
	</Svg>
);

export { Circle };
