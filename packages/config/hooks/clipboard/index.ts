import { getStringAsync, setStringAsync } from "expo-clipboard";

const useClipboard = () => {
	const copy = async (text: string) => await setStringAsync(text);
	const fetchCopied = async () => await getStringAsync();
	return { copy, fetchCopied };
};

export { useClipboard };
