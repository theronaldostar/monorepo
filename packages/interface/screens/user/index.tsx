import { useState } from "react";
import { createParam } from "solito";
import { TextLink } from "solito/link";

import { Checkbox, Label } from "interface/components";
import { SafeView } from "interface/layout";

const { useParam } = createParam<{ id: string }>();

const UserDetail = () => {
	const [id] = useParam("id");

	const [state, setState] = useState(false);

	return (
		<SafeView direction="flex-col" className="items-center justify-center space-x-2">
			<Label align="center" className="mb-4" weight="bold">{`User @: ${id?.toLocaleLowerCase()}`}</Label>
			<TextLink href="/">👈 Go Home?</TextLink>
			<Checkbox
				classTitle={`font-semibold ${state ? "text-success-600" : "text-error-600"}`}
				checked={state}
				onChange={() => setState(prev => !prev)}
				title="I agree"
			/>
		</SafeView>
	);
};

export { UserDetail };
