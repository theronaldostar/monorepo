import type { Config } from "tailwindcss";
import nativewind from "nativewind/preset";
import { withTV } from "tailwind-variants/transformer";

import extend from "@lib/tailwindcss/theme";

export default withTV<Config>({
	content: ["**/*.{js,ts,jsx,tsx,mdx}"],
	darkMode: "media",
	theme: { extend },
	presets: [nativewind],
});
