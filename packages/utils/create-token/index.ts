const createToken = (length: number = 6): string => [...Array(length)].map(() => (~~(Math.random() * 36)).toString(36)).join("");

export { createToken };
