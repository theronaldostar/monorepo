import type { Config } from "tailwindcss";
import { withTV } from "tailwind-variants/transformer";

export default withTV<Config>({
	content: ["index.html", "**/*.{js,ts,jsx,tsx}", "src/**/*.{js,ts,jsx,tsx}", "../../packages/**/**/*.{js,ts,jsx,tsx}"],
	important: "html",
	presets: [import("@lib/tailwindcss")],
});
