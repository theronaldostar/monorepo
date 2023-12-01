import { createParam } from "solito";
import { TextLink } from "solito/link";

import { Label } from "interface/components";
import { TagView } from "interface/layout";

const { useParam } = createParam<{ id: string }>();

const UserDetail = () => {
	const [id] = useParam("id");

	return (
		<TagView className="flex-1 items-center justify-center">
			<Label align="center" className="mb-4" weight="bold">{`User ID: ${id}`}</Label>
			<TextLink href="/">👈 Go Home?</TextLink>
		</TagView>
	);
};

export { UserDetail };
