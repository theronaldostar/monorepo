import { Stack } from "expo-router";

import { SafeProvider } from "interface/layout";

const Root = () => (
	<SafeProvider>
		<Stack />
	</SafeProvider>
);

export default Root;
