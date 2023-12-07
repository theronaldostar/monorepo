import { useState } from "react";

import { Label } from "interface/components";
import { SafeView, TagView } from "interface/layout";
import Select, { Group, Option } from "interface/components/select";
import Table, { TBody, TData, THeader, TGroup } from "interface/components/table";

const Components = () => {
	const [state, setState] = useState({
		select: "",
	});

	return (
		<SafeView direction="flex-col">
			<Label>Select: {state.select || "No value selected"}</Label>

			<TagView>
				<Select placeholder="A custom placeholder" onChange={value => setState(prev => ({ ...prev, select: value }))}>
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
		</SafeView>
	);
};

export { Components };
