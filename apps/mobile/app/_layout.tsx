import { useCallback } from "react";
import { Dimensions } from "react-native";
import { useFonts } from "expo-font";
import { Slot, SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { InterMedium, InterRegular, InterSemibold } from "@asset/font/inter";
import { TagView } from "ui/layout";

import "@lib/tailwindcss/config.css";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
	const [loaded, error] = useFonts({
		InterMedium,
		InterRegular,
		InterSemibold,
	});

	const { width, height } = Dimensions.get("screen");

	const handleLayout = useCallback(async () => {
		if (loaded || error) await SplashScreen.hideAsync();
	}, [loaded, error]);

	if (!loaded || error) return null;

	return (
		<TagView className="bg-slate-100 dark:bg-slate-900" onLayout={handleLayout} style={{ width, height }}>
			<StatusBar style="auto" />
			<Slot />
		</TagView>
	);
};

export default Layout;
