import "react-native-gesture-handler";
import "react-native-reanimated";

import "@config/i18n";
import "@lib/tailwindcss/config.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AppRoutes from "@app/web/src/routes";

const container = document.querySelector("#root");
const root = createRoot(container!);
root.render(
	<StrictMode>
		<AppRoutes />
	</StrictMode>,
);
