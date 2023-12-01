const { withExpo } = require("@expo/next-adapter");

/** @type {import("next").NextConfig} */
const nextConfig = {
	experimental: {},
	reactStrictMode: false,
	transpilePackages: ["react-native", "react-native-web", "moti", "solito", "nativewind", "react-native-gesture-handler", "react-native-reanimated"],
};

module.exports = withExpo(nextConfig);
