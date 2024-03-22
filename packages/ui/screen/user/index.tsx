import { useNavigate, useParams } from "@config/hooks";

import { SafeView, TagView } from "ui/layout";
import { Button, Label } from "ui/components";

const UserDetail = () => {
	const { id } = useParams();
	const { navigate } = useNavigate();

	return (
		<SafeView className="items-center justify-center">
			<TagView className="w-full max-w-2xl gap-y-6 px-4">
				<Label align="center" size="3xl" weight="semibold">
					This page aims to display the user's @!
				</Label>
				<Label align="center" size="xl" weight="semibold">{`User: @${id}`}</Label>
				<TagView className="justify-center gap-x-2" direction="row">
					<Button title="All Components" onPress={() => navigate("/example")} />
					<Button title="👈 Go Home" onPress={() => navigate("/")} />
				</TagView>
			</TagView>
		</SafeView>
	);
};

export { UserDetail };
