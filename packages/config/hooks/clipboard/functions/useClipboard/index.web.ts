import to from "await-to-js";

const useClipboard = () => {
	const { clipboard } = navigator;

	const copy = async (text: string) => {
		const [error] = await to(clipboard?.writeText(text));
		if (error) console.error("Error copying text:", error);
	};

	const fetchCopied = async () => {
		const [error, result] = await to(clipboard?.readText());
		if (error) {
			console.error("Error fetching copied text:", error);
			return "";
		}
		return result;
	};

	return { copy, fetchCopied };
};

export { useClipboard };
