import type { Config } from "tailwindcss";

import extend from "@lib/tailwindcss/theme";

export default {
	content: ["**/*.{js,ts,tsx}"],
	darkMode: "media",
	plugins: [],
	presets: [require("nativewind/preset")],
	theme: { extend },
} satisfies Config;
