import { useCallback } from "react";
import { Dimensions, Platform, KeyboardAvoidingView as AvoidingView } from "react-native";
import { useFonts } from "expo-font";
import { Slot, SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { configureReanimatedLogger, ReanimatedLogLevel } from "react-native-reanimated";

import { InterMedium, InterRegular, InterSemibold } from "@asset/font/inter";
import { TagView } from "ui/layout";

import "@config/i18n";
import "@lib/tailwindcss/config.css";

configureReanimatedLogger({ level: ReanimatedLogLevel.warn, strict: false });

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
		<GestureHandlerRootView>
			<TagView className="bg-slate-100 dark:bg-slate-900" onLayout={handleLayout} style={{ width, height }}>
				<StatusBar style="auto" />
				<AvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} className="flex-1">
					<Slot />
				</AvoidingView>
			</TagView>
		</GestureHandlerRootView>
	);
};

export default Layout;
