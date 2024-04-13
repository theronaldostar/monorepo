type useClassProps = (boolean | null | string | undefined)[];

const useClass = (...props: useClassProps) => props.filter(Boolean).join(" ").replace(/\s\s+/g, " ").trim();

export { useClass, type useClassProps };
