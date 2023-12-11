import type { SafeProviderProps } from "./safe-provider";
import { SafeView } from "interface/layout/view/safe-view";

const SafeProvider = (props: SafeProviderProps) => <SafeView {...props} />;

export { SafeProvider, type SafeProviderProps };
