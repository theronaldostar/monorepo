import type { Config } from "tailwindcss";
import { withTV } from "tailwind-variants/transformer";

import preset from "@lib/tailwindcss";

export default withTV<Config>({
	content: ["index.html", "**/*.{js,ts,jsx,tsx}", "src/**/*.{js,ts,jsx,tsx}", "../../packages/**/**/*.{js,ts,jsx,tsx}"],
	important: "html",
	presets: [preset],
});
