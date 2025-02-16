import type { Config } from "tailwindcss";
import { withTV } from "tailwind-variants/transformer";

import twPreset from "@lib/tailwindcss";

export default withTV<Config>({
	content: ["**/*.{js,ts,jsx,tsx,mdx}", "app/**/*.{js,ts,jsx,tsx,mdx}", "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}"],
	presets: [twPreset],
});
