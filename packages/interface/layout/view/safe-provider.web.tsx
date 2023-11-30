import type { SafeProviderProps } from "./safe-provider";
import { SafeView } from "./safe-view";

const SafeProvider = (props: SafeProviderProps) => <SafeView {...props} />;

export { SafeProvider, type SafeProviderProps };
