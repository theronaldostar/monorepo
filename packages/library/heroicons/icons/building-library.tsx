import Svg, { Path, type SvgProps } from "react-native-svg";

const BuildingLibrary = (props: SvgProps) => (
	<Svg width={24} height={24} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
		<Path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
		/>
	</Svg>
);

export { BuildingLibrary };
