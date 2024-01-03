import { MotiLink } from "solito/moti";
import { useRouter } from "solito/router";

import { Button, Label, Link, TextLink } from "interface/components";
import { SafeView, Scroll, TagView } from "interface/layout";

const HomeScreen = () => {
	const { push } = useRouter();

	return (
		<SafeView className="justify-center" direction="flex-col">
			<TagView className="items-center justify-center space-y-4" direction="flex-col">
				<Label size="2xl" weight="bold">
					Welcome to a perfect Monorepo.
				</Label>

				<TagView className="max-w-xl space-y-4" direction="flex-col">
					<Label className="text-center" truncate={false}>
						Here is a basic starter to show you how you can navigate from one screen to another. This screen uses the same code on Next.js and React
						Native.
					</Label>

					<Label align="center">
						Monorepo is made by{" "}
						<Link href="https://twitter.com/theronaldostar" target="_blank">
							Ronaldo S
						</Link>
						{"."}
					</Label>

					<Label align="center">
						NativeWind is made by{" "}
						<Link href="https://twitter.com/mark__lawlor" target="_blank">
							Mark Lawlor
						</Link>
						{"."}
					</Label>
				</TagView>

				<Scroll horizontal>
					<TagView className="items-center space-x-8">
						<Button title="Components!" size="md" rounded onPress={() => push("/components")} />
						<TextLink href="/user/ronaldo">Regular Link?</TextLink>
						<MotiLink
							href="/user/ronaldo"
							animate={({ hovered, pressed }) => {
								"worklet";
								return {
									scale: pressed ? 0.95 : hovered ? 1.1 : 1,
									rotateZ: pressed ? "0deg" : hovered ? "-3deg" : "0deg",
								};
							}}
							transition={{ type: "timing", duration: 150 }}>
							<Label selectable={false} size="base" weight="bold">
								Moti Link.
							</Label>
						</MotiLink>
					</TagView>
				</Scroll>
			</TagView>
		</SafeView>
	);
};

export { HomeScreen };
