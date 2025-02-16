type ClsxProps = (boolean | null | string | undefined)[];

const clsx = (...props: ClsxProps) => props.filter(Boolean).join(" ").replace(/\s\s+/g, " ").trim();

export { clsx, type ClsxProps };
