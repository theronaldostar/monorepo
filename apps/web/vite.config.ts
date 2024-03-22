import basicSsl from "@vitejs/plugin-basic-ssl";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
	define: {
		global: "window",
		loader: { ".js": "jsx" },
	},
	optimizeDeps: { include: [] },
	plugins: [react({ jsxImportSource: "nativewind" }), basicSsl()],
	resolve: {
		alias: {
			"react-native": "react-native-web",
			"react-native-svg": "react-native-svg-web",
		},
		extensions: [".css", ".json", ".web.js", ".web.ts", ".web.tsx", ".js", ".ts", ".tsx"],
	},
	server: { port: 3000, host: true },
});
