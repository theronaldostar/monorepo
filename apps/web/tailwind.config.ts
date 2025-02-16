import type { Config } from "tailwindcss";
import { withTV } from "tailwind-variants/transformer";

import twPreset from "@lib/tailwindcss";

export default withTV<Config>({
	content: ["index.html", "src/**/*.{js,ts,jsx,tsx,mdx}", "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}"],
	important: "html",
	presets: [twPreset],
});
