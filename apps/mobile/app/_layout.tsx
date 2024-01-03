import { useFonts } from "@expo-google-fonts/inter";
import { Slot, SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

import { Label } from "interface/components";
import { SafeProvider } from "interface/layout";

const Layout = () => {
	const [loaded, error] = useFonts({
		"Inter-medium": require("@asset/font/inter/inter-medium.ttf"),
		"Inter-regular": require("@asset/font/inter/inter-regular.ttf"),
		"Inter-semibold": require("@asset/font/inter/inter-semibold.ttf"),
	});

	useEffect(() => {
		if (loaded) SplashScreen.hideAsync();
	}, [loaded]);

	if (error) return <Label>Font 404</Label>;

	return (
		<SafeProvider>
			<StatusBar style="auto" />
			<Slot />
		</SafeProvider>
	);
};

export default Layout;
