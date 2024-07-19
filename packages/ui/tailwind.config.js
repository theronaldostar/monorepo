import { withTV } from "tailwind-variants/transformer";

import twPreset from "@lib/tailwindcss";

/** @type {import("tailwindcss").Config} */
export default withTV({
	content: ["**/*.{js,jsx,ts,tsx}", "components/**/*.{js,jsx,ts,tsx}", "layout/**/*.{js,jsx,ts,tsx}", "screens/**/*.{js,jsx,ts,tsx}"],
	presets: [twPreset],
});
