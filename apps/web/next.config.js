const { withExpo } = require("@expo/next-adapter");

/** @type {import("next").NextConfig} */
const nextConfig = {
	experimental: {},
	reactStrictMode: false,
	transpilePackages: ["react-native", "react-native-web", "moti", "solito", "nativewind", "react-native-gesture-handler", "react-native-reanimated"],
	webpack: config => {
		config.resolve.alias = {
			...(config.resolve.alias || {}),
			"react-native$": "react-native-web",
		};
		config.resolve.extensions = [...config.resolve.extensions, ".web.js", ".web.jsx", ".web.ts", ".web.tsx"];
		return config;
	},
};

module.exports = withExpo(nextConfig);
