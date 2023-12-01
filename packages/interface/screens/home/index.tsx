import { MotiLink } from "solito/moti";

import { Label, Button, Link } from "interface/components";
import { SafeView, TagView } from "interface/layout";

const HomeScreen = () => (
	<SafeView className="items-center justify-center space-y-4" direction="flex-col">
		<Label size="2xl" weight="bold">
			Welcome to a perfect Monorepo.
		</Label>
		<TagView className="max-w-xl space-y-4" direction="flex-col">
			<Label className="text-center" truncate={false}>
				Here is a basic starter to show you how you can navigate from one screen to another. This screen uses the same code on Next.js and React Native.
			</Label>
			<Label align="center">
				Monorepo is made by{" "}
				<Link href="https://twitter.com/theronaldostar" target="_blank">
					Ronaldo S!
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
		<TagView className="h-8" />
		<TagView className="items-center space-x-8">
			<Button title="Button Link" color="secondary" size="md" rounded />
			<Link weight="bold" size="base" href="/user/Ronaldo">
				Regular Link
			</Link>
			<MotiLink
				href="/user/Ronaldo"
				animate={({ hovered, pressed }) => {
					"worklet";
					return {
						scale: pressed ? 0.95 : hovered ? 1.1 : 1,
						rotateZ: pressed ? "0deg" : hovered ? "-3deg" : "0deg",
					};
				}}
				transition={{
					type: "timing",
					duration: 150,
				}}>
				<Label selectable={false} size="base" weight="bold">
					Moti Link.
				</Label>
			</MotiLink>
		</TagView>
	</SafeView>
);

export { HomeScreen };
