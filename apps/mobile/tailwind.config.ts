import type { Config } from "tailwindcss";
import { withTV } from "tailwind-variants/transformer";

import twPreset from "@lib/tailwindcss";

export default withTV<Config>({
	content: ["**/*.{js,ts,jsx,tsx}", "app/**/*.{js,ts,jsx,tsx}", "../../packages/ui/**/*.{js,ts,jsx,tsx}"],
	presets: [twPreset],
});
