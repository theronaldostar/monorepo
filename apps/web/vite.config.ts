import { env } from "process";
import { defineConfig } from "vite";
import basicSsl from "@vitejs/plugin-basic-ssl";
import react from "@vitejs/plugin-react-swc";

const extensions = [".css", ".json", ".web.mjs", ".web.js", ".web.mts", ".web.ts", ".web.jsx", ".web.tsx", ".mjs", ".js", ".mts", ".ts", ".jsx", ".tsx"];

export default defineConfig({
	build: { sourcemap: false },
	define: {
		__DEV__: JSON.stringify(env.NODE_ENV === "development"),
		global: "window",
		process: { env: { EXPO_OS: "web" } },
	},
	optimizeDeps: {
		esbuildOptions: {
			loader: { ".js": "tsx" },
			resolveExtensions: extensions,
		},
		force: true,
	},
	plugins: [basicSsl(), react({ jsxImportSource: "nativewind" })],
	resolve: {
		alias: {
			"react-native": "react-native-web",
			"react-native-svg": "react-native-svg-web",
		},
		extensions,
	},
	server: { port: 3000, host: true },
});
