import { getStringAsync, setStringAsync } from "expo-clipboard";

const useClipboard = () => {
	const copy = async (text: string) => await setStringAsync(text);
	const fetch = async () => await getStringAsync();
	return { copy, fetch };
};

export { useClipboard };
