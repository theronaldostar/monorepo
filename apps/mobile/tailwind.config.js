import { withTV } from "tailwind-variants/transformer";

import preset from "@lib/tailwindcss";

export default withTV({
	content: ["**/*.{js,jsx,ts,tsx}", "app/**/*.{js,jsx,ts,tsx}", "../../packages/**/*.{js,jsx,ts,tsx}"],
	presets: [preset],
});
