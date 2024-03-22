import { withTV } from "tailwind-variants/transformer";

export default withTV({
	content: ["**/*.{js,ts,tsx}", "app/**/*.{js,ts,tsx}", "../../packages/**/*.{js,ts,tsx}"],
	presets: [require("@lib/tailwindcss")],
});
