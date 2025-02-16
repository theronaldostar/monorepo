import type { ExpoConfig, ConfigContext } from "expo/config";

const backgroundColor = "#e2e8f0";

const AppConfig = ({ config }: ConfigContext): ExpoConfig => ({
	...config,
	name: "Monorepo",
	description: "",
	version: "1.0.0",
	jsEngine: "hermes",
	userInterfaceStyle: "automatic",
	platforms: ["android", "ios"],
	slug: "monorepo-mobile",
	orientation: "portrait",
	icon: "assets/icon.png",
	assetBundlePatterns: ["**/*"],
	newArchEnabled: true,
	scheme: "demo",
	splash: {
		backgroundColor,
		image: "assets/splash.png",
		resizeMode: "contain",
	},
	plugins: ["expo-font", "expo-router"],
	android: {
		adaptiveIcon: {
			backgroundColor,
			foregroundImage: "assets/adaptive.png",
		},
		package: "com.monorepo.mobile",
		userInterfaceStyle: "automatic",
	},
	ios: {
		// appStoreUrl: "",
		bundleIdentifier: "com.monorepo.mobile",
		supportsTablet: true,
	},
	extra: {
		// eas: {
		// 	projectId: "",
		// },
	},
	updates: {
		enabled: false,
		checkAutomatically: "ON_LOAD",
		url: "https://localhost:8081/api/manifest",
	},
});

export default AppConfig;
