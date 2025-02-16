import config from "@lib/prettier-eslint/eslint.config.js";
import tsESLint from "typescript-eslint";

export default tsESLint.config({ extends: [config] });
