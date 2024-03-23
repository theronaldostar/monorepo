import { useState, type ReactNode } from "react";

import { useNavigate } from "@config/hooks";
import { Envelope } from "@lib/heroicons";
import { Button, CheckBox, IconButton, Label, Input } from "ui/components";
import Select, { Option, OptGroup } from "ui/components/select";
import Table, { Body, Header, Group, Data } from "ui/components/table";
import { SafeView, Scroll, TagView } from "ui/layout";

type GroupExampleProps = {
	children: ReactNode;
	title: string;
};

const GroupExample = ({ children, title }: GroupExampleProps) => (
	<TagView className="gap-y-4">
		<TagView className="bg-slate-200 px-2 py-1 dark:bg-slate-800">
			<Label>{title}:</Label>
		</TagView>
		<TagView className="gap-y-2">{children}</TagView>
	</TagView>
);

const Back = () => {
	const { navigate } = useNavigate();

	const handlePress = () => navigate("/");

	return (
		<TagView className="items-center justify-center">
			<Button rounded title="👈 Go Home" onPress={handlePress} />
		</TagView>
	);
};

const Example = () => {
	const [state, setState] = useState({
		button: 0,
	});

	const handleButton = () => setState(prev => ({ ...prev, button: prev.button + 1 }));

	// eslint-disable-next-line
	const handleChange = (value: string) => console.log(value);

	return (
		<SafeView className="items-center" webSafe>
			<Scroll className="max-w-max">
				<TagView className="h-full gap-4">
					<Back />
					<GroupExample title="Table">
						<Table>
							{/* <Header bgClass="!bg-slate-600" dataClass="!text-white"> */}
							<Header>
								<Data>#</Data>
								<Data>Name</Data>
								<Data>Age</Data>
								<Data>Action</Data>
							</Header>
							<Body>
								<Group>
									<Data>1</Data>
									<Data>Ronaldo S.</Data>
									<Data>23</Data>
									<Data>#</Data>
								</Group>
								<Group>
									<Data>2</Data>
									<Data>Monorepo</Data>
									<Data>?</Data>
									<Data>#</Data>
								</Group>
							</Body>
						</Table>
					</GroupExample>

					<GroupExample title={`Buttons: Count ~ ${state.button}`}>
						<TagView className="items-center justify-evenly gap-x-2" direction="row">
							<Button icon={{ position: "left", svg: Envelope }} onPress={handleButton} rounded size="large" title={`Count: ${state.button}`} />
							<Button disabled onPress={handleButton} rounded title={`Count: ${state.button}`} />
							<Button onPress={handleButton} rounded size="small" title={`Count: ${state.button}`} />
						</TagView>

						<TagView className="items-center justify-evenly gap-x-2" direction="row">
							<Button
								disabled
								icon={{ position: "left", svg: Envelope }}
								onPress={handleButton}
								outline
								size="large"
								title={`Count: ${state.button}`}
							/>
							<Button onPress={handleButton} outline title={`Count: ${state.button}`} />
							<Button onPress={handleButton} outline size="small" title={`Count: ${state.button}`} />
						</TagView>
					</GroupExample>

					<GroupExample title="Icon Button">
						<TagView className="items-center justify-evenly gap-x-2" direction="row">
							<IconButton icon={Envelope} onPress={() => handleChange("Icon!")} />
							<IconButton icon={Envelope} onPress={() => handleChange("Icon Button!")} title="Icon Button!" />
						</TagView>
					</GroupExample>

					<GroupExample title="CheckBox">
						<TagView className="gap-y-2">
							<TagView className="justify-evenly gap-x-2" direction="row">
								<CheckBox title="Checkbox" size="large" />
								<CheckBox title="Checkbox" size="medium" />
								<CheckBox checked title="Checkbox" />
							</TagView>

							<TagView className="justify-evenly gap-x-2" direction="row">
								<CheckBox rounded title="Checkbox" size="large" />
								<CheckBox rounded title="Checkbox" size="medium" />
								<CheckBox checked rounded title="Checkbox" />
							</TagView>
						</TagView>
					</GroupExample>

					<GroupExample title="Select">
						<Select placeholder="Choose a car" label="Choose a car:" onChange={handleChange}>
							<Option selected value="">
								None
							</Option>
							<OptGroup disabled title="Disabled: Swedish Cars">
								<Option disabled value="volvo">
									Volvo
								</Option>
								<Option value="saab">Saab</Option>
							</OptGroup>
							<OptGroup title="German Cars">
								<Option value="mercedes">Mercedes</Option>
								<Option value="audi">Audi</Option>
							</OptGroup>
						</Select>

						<Select icon={Envelope} label="Choose a car:" onChange={handleChange}>
							<Option value="">None</Option>
							<OptGroup title="Swedish Cars">
								<Option value="volvo">Volvo</Option>
								<Option value="saab">Saab</Option>
							</OptGroup>
						</Select>
					</GroupExample>

					<GroupExample title="Input?">
						<Input onChangeText={handleChange} placeholder="Input" title="Normal Input" />
						<Input icon={{ left: Envelope }} onChangeText={handleChange} placeholder="Your Email" title="Email" type="email" />
						<Input
							icon={{ left: Envelope, right: Envelope }}
							onChangeText={handleChange}
							placeholder="Your password"
							title="Password"
							type="password"
						/>
						<Input
							disabled
							icon={{ left: Envelope, right: Envelope }}
							onChangeText={handleChange}
							placeholder="Confirm your password"
							title="Password"
							type="password"
						/>
					</GroupExample>

					<Back />
				</TagView>
			</Scroll>
		</SafeView>
	);
};

export { Example };
