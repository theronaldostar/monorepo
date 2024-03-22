import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AppRoutes from "@app/web/src/routes";

import "@lib/tailwindcss/config.css";

const container = document.querySelector("#root");
const root = createRoot(container!);
root.render(
	<StrictMode>
		<AppRoutes />
	</StrictMode>,
);
