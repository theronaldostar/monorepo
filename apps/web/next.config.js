const { withExpo } = require("@expo/next-adapter");

/** @type {import("next").NextConfig} */
const nextConfig = {
	experimental: {},
	reactStrictMode: false,
	transpilePackages: [
		"expo-router",
		"interface",
		"moti",
		"nativewind",
		"react-native",
		"react-native-gesture-handler",
		"react-native-reanimated",
		"react-native-web",
		"solito",
	],
};

module.exports = withExpo(nextConfig);
