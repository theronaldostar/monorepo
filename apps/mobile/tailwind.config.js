import { withTV } from "tailwind-variants/transformer";

import preset from "@lib/tailwindcss";

export default withTV({
	content: ["**/*.{js,ts,tsx}", "app/**/*.{js,ts,tsx}", "../../packages/**/*.{js,ts,tsx}"],
	presets: [preset],
});
