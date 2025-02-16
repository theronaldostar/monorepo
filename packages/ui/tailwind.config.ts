import type { Config } from "tailwindcss";
import { withTV } from "tailwind-variants/transformer";

import twPreset from "@lib/tailwindcss";

export default withTV<Config>({
	content: ["**/*.{js,ts,jsx,tsx,mdx}", "components/**/*.{js,ts,jsx,tsx,mdx}", "layout/**/*.{js,ts,jsx,tsx,mdx}", "screens/**/*.{js,ts,jsx,tsx,mdx}"],
	presets: [twPreset],
});
