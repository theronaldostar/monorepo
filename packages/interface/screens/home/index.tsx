import { MotiLink } from "solito/moti";

import { Label, Button, Link, TextLink } from "interface/components";
import Select, { Group, Option } from "interface/components/select";
import Table, { TBody, TData, THeader, TGroup } from "interface/components/table";
import { SafeView, Scroll, TagView } from "interface/layout";

import { useRouter } from "solito/router";

const HomeScreen = () => {
	const { push } = useRouter();

	return (
		<SafeView className="justify-center space-y-8" direction="flex-col">
			<TagView className="items-center justify-center space-y-4" direction="flex-col">
				<Label size="2xl" weight="bold">
					Welcome to a perfect Monorepo..
				</Label>
				{/* @space */}
				<TagView className="max-w-xl space-y-4" direction="flex-col">
					<Label className="text-center" truncate={false}>
						Here is a basic starter to show you how you can navigate from one screen to another. This screen uses the same code on Next.js and React
						Native.
					</Label>
					{/* @space */}
					<Label align="center">
						Monorepo is made by{" "}
						<Link href="https://twitter.com/theronaldostar" target="_blank">
							Ronaldo S
						</Link>
						{"."}
					</Label>
					{/* @space */}
					<Label align="center">
						NativeWind is made by{" "}
						<Link href="https://twitter.com/mark__lawlor" target="_blank">
							Mark Lawlor
						</Link>
						{"."}
					</Label>
				</TagView>
				{/* @space */}
				<TagView className="items-center space-x-8">
					<Button title="Button Link" size="md" rounded onPress={() => push("/user/ronaldo")} />
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
			</TagView>
			{/* @space */}
			<TagView>
				<Scroll className="w-full space-y-4" direction="flex-col">
					{/* @space */}
					<Select onChange={() => null}>
						<Group title="Fruits">
							<Option value="mango">Mango</Option>
							<Option value="apple">Apple</Option>
							<Option value="banana">Banana</Option>
						</Group>
						<Group title="Person">
							<Option value="ronaldo">Ronaldo</Option>
							<Option value="messi">Messi</Option>
							<Option value="neymar">Neymar</Option>
						</Group>
					</Select>
					{/* @space */}
					<Table>
						<THeader>
							<TData>ID</TData>
							<TData>Name</TData>
							<TData>Age</TData>
						</THeader>
						<TBody>
							<TGroup>
								<TData>1</TData>
								<TData>Elon Musk</TData>
								<TData>5?</TData>
							</TGroup>
							<TGroup>
								<TData>2</TData>
								<TData>Ronaldo S.</TData>
								<TData>25</TData>
							</TGroup>
						</TBody>
					</Table>
					{/* @space */}
				</Scroll>
			</TagView>
			{/* @space */}
		</SafeView>
	);
};

export { HomeScreen };
