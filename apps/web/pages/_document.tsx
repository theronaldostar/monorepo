import { useEffect } from "react";
import { AppRegistry } from "react-native";
import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
	useEffect(() => {
		AppRegistry.registerComponent("Main", () => Main);
		return () => {};
	}, []);

	return (
		<Html lang="en">
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
