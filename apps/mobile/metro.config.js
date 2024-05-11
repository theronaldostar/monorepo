const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const { resolve } = require("path");

const root = __dirname;
const monorepo = resolve(root, "../..");

/** @type {import("expo/metro-config").MetroConfig} */
const config = getDefaultConfig(root);
config.watchFolders = [monorepo];
config.resolver.nodeModulesPaths = [resolve(root, "node_modules"), resolve(monorepo, "node_modules")];

module.exports = withNativeWind(config, {
	input: require.resolve("@lib/tailwindcss/config.css"),
});
