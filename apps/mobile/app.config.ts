import type { ExpoConfig, ConfigContext } from "expo/config";

const colors = { primary: "#fff", secondary: "#252525" };

const AppConfig = ({ config }: ConfigContext): ExpoConfig => ({
	...config,
	name: "Monorepo App",
	description: "",
	version: "1.0.0",
	jsEngine: "hermes",
	userInterfaceStyle: "automatic",
	privacy: "public",
	platforms: ["android", "ios"],
	slug: "mobile",
	orientation: "portrait",
	icon: "./archive/icon.png",
	assetBundlePatterns: ["**/*"],
	scheme: "mobile",
	splash: {
		backgroundColor: colors.secondary,
		image: "./archive/splash.png",
		resizeMode: "contain",
	},
	plugins: ["expo-router"],
	android: {
		adaptiveIcon: {
			backgroundColor: colors.primary,
			foregroundImage: "./archive/adaptive.png",
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
