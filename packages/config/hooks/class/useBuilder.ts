import { Types } from "./types";

const useBuilder = (...classNames: Types.Class) => classNames.filter(Boolean).join(" ").replace(/\s\s+/g, " ").trim();

export { useBuilder };
