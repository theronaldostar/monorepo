import Svg, { Path, type SvgProps } from "react-native-svg";

const Bars = (props: SvgProps) => (
	<Svg width={24} height={24} viewBox="0 0 40 40" fill="currentColor" {...props}>
		<Path d="M5 30v-2.792h30V30Zm0-8.625v-2.75h30v2.75Zm0-8.583V10h30v2.792Z" />
	</Svg>
);

export { Bars };
