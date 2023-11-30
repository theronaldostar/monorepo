import { A, H1, P, Text, TextLink } from "app/design/typography";
import { Row } from "app/design/layout";

import { MotiLink } from "solito/moti";

import { Label, Button, Link } from "interface/components";

import { TagView } from "interface/layout";

const HomeScreen = () => (
	<TagView className="flex-1 items-center justify-center p-3" direction="flex-col">
		<Label size="2xl" weight="bold">
			Welcome to a perfect Monorepo.?
		</Label>

		<TagView className="max-w-xl" direction="flex-col">
			<P className="text-center">
				Here is a basic starter to show you how you can navigate from one screen to another. This screen uses the same code on Next.js and React Native.
			</P>
			<P className="text-center">
				Monorepo is made by{" "}
				<Link
					href="https://twitter.com/theronaldostar"
					hrefAttrs={{
						target: "_blank",
						rel: "noreferrer",
					}}>
					Ronaldo S
				</Link>
				.
			</P>
			<P className="text-center">
				NativeWind is made by{" "}
				<Link href="https://twitter.com/mark__lawlor" target="_blank">
					Mark Lawlor
				</Link>
				.
			</P>
		</TagView>
		<TagView className="h-[32px]" />
		<TagView className="itens-center space-x-8">
			<Button title="Button Link" className="bg-[#f90]" />
			<Link weight="bold" size="base" href="/user/ronaldo">
				Regular Link
			</Link>
			<MotiLink
				href="/user/ronaldo"
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
				<Text selectable={false} className="text-base font-bold">
					Moti Link.
				</Text>
			</MotiLink>
		</TagView>
	</TagView>
);

export { HomeScreen };
