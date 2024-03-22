import type { ExpoConfig, ConfigContext } from "expo/config";

const backgroundColor = "#e2e8f0";

const AppConfig = ({ config }: ConfigContext): ExpoConfig => ({
	...config,
	name: "Monorepo",
	description: "Application version for operation on Android and iOS devices.",
	version: "1.0.0",
	jsEngine: "hermes",
	userInterfaceStyle: "automatic",
	privacy: "public",
	platforms: ["android", "ios"],
	slug: "monorepo",
	orientation: "portrait",
	icon: "archive/icon.png",
	assetBundlePatterns: ["**/*"],
	scheme: "demo",
	splash: {
		backgroundColor,
		image: "archive/splash.png",
		resizeMode: "contain",
	},
	plugins: ["expo-font", "expo-router"],
	android: {
		adaptiveIcon: {
			backgroundColor,
			foregroundImage: "archive/adaptive.png",
		},
		package: "com.monorepo",
		userInterfaceStyle: "automatic",
	},
	ios: {
		// appStoreUrl: "",
		bundleIdentifier: "com.monorepo",
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
