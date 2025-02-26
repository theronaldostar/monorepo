import type { Config } from "tailwindcss";
import { withTV } from "tailwind-variants/transformer";

import twPreset from "@lib/tailwindcss";

export default withTV<Config>({
	content: ["**/*.{js,ts,jsx,tsx}", "components/**/*.{js,ts,jsx,tsx}", "layout/**/*.{js,ts,jsx,tsx}", "screens/**/*.{js,ts,jsx,tsx}"],
	presets: [twPreset],
});
