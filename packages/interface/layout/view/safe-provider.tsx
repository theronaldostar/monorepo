import { SafeAreaProvider, type SafeAreaProviderProps } from "react-native-safe-area-context";

interface SafeProviderProps extends SafeAreaProviderProps {}

const SafeProvider = SafeAreaProvider;

export { SafeProvider, type SafeProviderProps };
