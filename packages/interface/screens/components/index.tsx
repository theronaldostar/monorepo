import { useState } from "react";
import { useRouter } from "solito/router";

import { Button, Checkbox, Input, Label } from "interface/components";
import Select, { Group, Option } from "interface/components/select";
import Table, { TBody, TData, THeader, TGroup } from "interface/components/table";
import { SafeView, TagView } from "interface/layout";

import { Check, LockClosed, LockOpen } from "@library/heroicons";

const Components = () => {
	const [state, setState] = useState(false);

	const { back } = useRouter();

	return (
		<SafeView className="mx-4 space-y-4" direction="flex-col">
			<Label>Select:</Label>

			<TagView>
				<Select placeholder="A custom placeholder" onChange={value => alert(value)}>
					<Group title="Fruits">
						<Option value="mango">Mango</Option>
						<Option value="apple">Apple</Option>
						<Option value="banana">Banana</Option>
					</Group>
					<Group title="Person">
						<Option value="ronaldo">Ronaldo S.</Option>
						<Option value="messi">Messi</Option>
						<Option value="neymar">Neymar</Option>
					</Group>
				</Select>
			</TagView>

			<Label>Table:</Label>

			<TagView>
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
			</TagView>

			<Label>Button:</Label>

			<TagView className="items-center justify-center space-x-2">
				<Button rounded size="sm" title="Primary" />
				<Button color="error" title="Error" size="md" variant="secondary" />
				<Button color="warning" title="Warning" />
			</TagView>

			<TagView direction="flex-col">
				<Label>Input:</Label>
				<Input
					icon={{ left: LockClosed, right: LockOpen }}
					onChange={value => console.info(value)}
					type="password"
					label="Password"
					placeholder="Enter your password"
				/>
			</TagView>

			<Label>Checkbox:</Label>

			<Checkbox classTitle="font-semibold" checked={state} onChange={() => setState(prev => !prev)} title="This is a checkbox" />

			<TagView className="justify-center" width="full">
				<Button icon={{ svg: Check, position: "left" }} onPress={back} rounded title="Back to Home" uppercase />
			</TagView>
		</SafeView>
	);
};

export { Components };
