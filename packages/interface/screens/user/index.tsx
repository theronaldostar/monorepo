import { createParam } from "solito";
import { TextLink } from "solito/link";

import { Label } from "interface/components";

import { View } from "app/design/view";

const { useParam } = createParam<{ id: string }>();

const UserDetail = () => {
	const [id] = useParam("id");

	return (
		<View className="flex-1 items-center justify-center">
			<Label align="center" className="mb-4" weight="bold">{`User ID: ${id}`}</Label>
			<TextLink href="/">👈 Go Home?</TextLink>
		</View>
	);
};

export { UserDetail };
