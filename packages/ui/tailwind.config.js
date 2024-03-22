import { withTV } from "tailwind-variants/transformer";

import twPreset from "@lib/tailwindcss";

/** @type {import("tailwindcss").Config} */
export default withTV({
	content: ["**/*.{js,ts,tsx}", "components/**/*.{js,ts,tsx}", "layout/**/*.{js,ts,tsx}", "screens/**/*.{js,ts,tsx}"],
	presets: [twPreset],
});
