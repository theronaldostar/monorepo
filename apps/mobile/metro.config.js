const { getDefaultConfig } = require("expo/metro-config");
const { resolve } = require("path");

const projectRoot = __dirname;

const workspaceRoot = resolve(projectRoot, "../..");

/** @type {import("expo/metro-config").MetroConfig} */
const config = getDefaultConfig(projectRoot);

config.watchFolders = [workspaceRoot];
config.resolver.disableHierarchicalLookup = true;
config.resolver.nodeModulesPaths = [resolve(projectRoot, "node_modules"), resolve(workspaceRoot, "node_modules")];

module.exports = config;
