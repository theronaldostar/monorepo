const getClass = <T, K extends keyof T>(object: T, index: K) => object[index]!;

export default getClass;
export { getClass };
