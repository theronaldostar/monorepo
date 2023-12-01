import { createParam } from "solito";

const useParam = (param: string) => {
	const { useParam: use } = createParam();

	return use(param);
};

export { useParam };
