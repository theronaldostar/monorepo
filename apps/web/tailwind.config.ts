import type { Config } from "tailwindcss";
import { withTV } from "tailwind-variants/transformer";

import preset from "@lib/tailwindcss";

export default withTV<Config>({
	content: ["index.html", "**/*.{js,jsx,ts,tsx}", "src/**/*.{js,jsx,ts,tsx}", "../../packages/**/**/*.{js,jsx,ts,tsx}"],
	important: "html",
	presets: [preset],
});
