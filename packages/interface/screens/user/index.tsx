import { createParam } from "solito";
import { TextLink } from "solito/link";

import { Label } from "interface/components";
import { SafeView } from "interface/layout";

const { useParam } = createParam<{ id: string }>();

const UserDetail = () => {
	const [id] = useParam("id");

	return (
		<SafeView direction="flex-col" className="items-center justify-center">
			<Label align="center" className="mb-4" weight="bold">{`User @: ${id?.toLocaleLowerCase()}`}</Label>
			<TextLink href="/">👈 Go Home??</TextLink>
		</SafeView>
	);
};

export { UserDetail };
