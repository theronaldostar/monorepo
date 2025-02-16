import { useState } from "react";

import { useNavigate } from "@hooks/routes";

import { Button } from "ui/components/button";
import Label, { Link } from "ui/components/label";
import { SafeView, TagView } from "ui/layout";

const HomeScreen = () => {
	const [state, setState] = useState(false);

	const { navigate } = useNavigate();

	const handleShow = () => setState(prev => !prev);
	const handlePress = (path: string) => navigate(path);

	return (
		<SafeView className="justify-middle">
			<TagView className="w-full max-w-2xl gap-6 px-4">
				<Label className="select-none" align="center" onPress={handleShow} size="4xl" truncate={state} weight="bold">
					Welcome to a perfect Monorepo.
				</Label>

				<TagView className="gap-2">
					<Label align="center" onPress={handleShow} size="lg" truncate={state}>
						Here is a basic starter to show you how you can navigate from one screen to another. This screen uses the same code on Vite and React
						Native.
					</Label>

					<Label align="center" weight="semibold">
						Monorepo is made by{" "}
						<Link href="https://twitter.com/theronaldostar" target="_blank">
							Ronaldo S
						</Link>
						<>.</>
					</Label>

					<Label align="center" weight="semibold">
						NativeWind is made by{" "}
						<Link href="https://twitter.com/mark__lawlor" target="_blank">
							Mark Lawlor
						</Link>
						<>.</>
					</Label>
				</TagView>

				<TagView className="justify-middle gap-4" direction="row">
					<Button title="All Components" onPress={() => handlePress("example")} />
					<Link href="/user/ronaldo" onPress={() => handlePress("/user/ronaldo")}>
						Profile Link!
					</Link>
				</TagView>
			</TagView>
		</SafeView>
	);
};

export { HomeScreen };
