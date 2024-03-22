type useMergeClassProps = Record<string, string | number | boolean>;

const useMergeClass = <T extends useMergeClassProps>(obj1: T, obj2: T): T => {
	const merged: Partial<T> = {};

	for (const key in obj1) {
		if (Object.prototype.hasOwnProperty.call(obj2, key)) {
			const value1 = obj1[key as keyof T];
			const value2 = obj2[key as keyof T];

			if (typeof value1 === "string" && typeof value2 === "string") {
				merged[key as keyof T] = `${value1} ${value2}` as T[keyof T];
			} else {
				merged[key as keyof T] = value1;
			}
		} else {
			merged[key as keyof T] = obj1[key as keyof T];
		}
	}

	for (const key in obj2) {
		if (!Object.prototype.hasOwnProperty.call(obj1, key)) {
			merged[key as keyof T] = obj2[key as keyof T];
		}
	}

	return merged as T;
};

export { useMergeClass, type useMergeClassProps };
