const useClipboard = () => {
	const copy = async (text: string) => await navigator?.clipboard?.writeText(text);
	const fetch = async () => await navigator?.clipboard?.readText();
	return { copy, fetch };
};

export { useClipboard };
