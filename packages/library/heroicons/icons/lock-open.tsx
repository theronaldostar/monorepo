import Svg, { Path, type SvgProps } from "react-native-svg";

const LockOpen = (props: SvgProps) => (
	<Svg fill="none" viewBox="0 0 24 24" width={24} height={24} strokeWidth={1.5} stroke="currentColor" {...props}>
		<Path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
		/>
	</Svg>
);

export { LockOpen };
