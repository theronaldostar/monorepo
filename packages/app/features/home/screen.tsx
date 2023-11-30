import { A, H1, P, Text, TextLink } from "app/design/typography";
import { Row } from "app/design/layout";

import { MotiLink } from "solito/moti";

import { Label } from "interface/components";

import { TagView } from "interface/layout";

export function HomeScreen() {
	return (
		<TagView className="flex-1 items-center justify-center p-3">
			<Label size="2xl" weight="bold">
				Welcome to a perfect Monorepo.
			</Label>

			<TagView className="max-w-xl">
				<P className="text-center">
					Here is a basic starter to show you how you can navigate from one screen to another. This screen uses the same code on Next.js and React
					Native.
				</P>
				<P className="text-center">
					Monorepo is made by{" "}
					<A
						href="https://twitter.com/theronaldostar"
						hrefAttrs={{
							target: "_blank",
							rel: "noreferrer",
						}}>
						Ronaldo S.
					</A>
				</P>
				<P className="text-center">
					NativeWind is made by{" "}
					<A
						href="https://twitter.com/mark__lawlor"
						hrefAttrs={{
							target: "_blank",
							rel: "noreferrer",
						}}>
						Mark Lawlor
					</A>
					.
				</P>
			</TagView>
			<TagView className="h-[32px]" />
			<Row className="space-x-8">
				<TextLink href="/user/ronaldo">Regular Link</TextLink>
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
			</Row>
		</TagView>
	);
}
