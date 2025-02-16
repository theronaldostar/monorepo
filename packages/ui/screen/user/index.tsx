import { useNavigate, useParams } from "@config/hooks";
import { useTranslation } from "react-i18next";

import { SafeView, TagView } from "ui/layout";
import { Button, Label } from "ui/components";

const UserDetail = () => {
	const { id } = useParams();
	const { navigate } = useNavigate();
	const { t } = useTranslation();

	return (
		<SafeView className="content-middle">
			<TagView className="w-full max-w-2xl gap-6 px-4">
				<Label align="center" size="3xl" weight="semibold">
					{t("user.description")}
				</Label>
				<Label align="center" size="xl" weight="semibold">{`${t("user.label")}: @${id}`}</Label>
				<TagView className="justify-center gap-2" direction="row">
					<Button title={t("buttons.components")} onPress={() => navigate("/example")} />
					<Button title={t("buttons.back")} onPress={() => navigate("/")} />
				</TagView>
			</TagView>
		</SafeView>
	);
};

export { UserDetail };
