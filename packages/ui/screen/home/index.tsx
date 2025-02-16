import { useState } from "react";
import { Switch } from "react-native";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import { useNavigate } from "@hooks/routes";

import { Button } from "ui/components/button";
import Label, { Link } from "ui/components/label";
import { SafeView, TagView } from "ui/layout";

const HomeScreen = () => {
	const [state, setState] = useState(() => {
		const isPtbr = i18next.language === "pt";
		return {
			truncate: false,
			isPtbr,
		};
	});

	const { t } = useTranslation();

	const { navigate } = useNavigate();

	const handleShow = () => setState(prev => ({ ...prev, truncate: !prev.truncate }));
	const handlePress = (path: string) => navigate(path);

	const handleSwitch = () => {
		const newLanguage = state.isPtbr ? "en" : "pt";
		i18next.changeLanguage(newLanguage);
		setState(prev => ({ ...prev, isPtbr: !prev.isPtbr }));
	};

	return (
		<SafeView className="content-middle">
			<TagView className="w-full max-w-2xl gap-6 px-4">
				<Label className="select-none" align="center" onPress={handleShow} size="4xl" truncate={state.truncate} weight="bold">
					{t("home.title")}
				</Label>

				<TagView className="gap-2">
					<Label align="center" onPress={handleShow} size="lg" truncate={state.truncate}>
						{t("home.description")}
					</Label>

					<Label align="center" weight="semibold">
						{t("home.credits.one")}{" "}
						<Link href="https://twitter.com/theronaldostar" target="_blank">
							Ronaldo S
						</Link>
						<>.</>
					</Label>

					<Label align="center" weight="semibold">
						{t("home.credits.two")}{" "}
						<Link href="https://twitter.com/mark__lawlor" target="_blank">
							Mark Lawlor
						</Link>
						<>.</>
					</Label>
				</TagView>

				<TagView className="content-middle gap-4" direction="row">
					<Button title={t("buttons.components")} onPress={() => handlePress("example")} />
					<Link href="/user/ronaldo" onPress={() => handlePress("/user/ronaldo")}>
						{t("home.textLink")}!
					</Link>
				</TagView>

				<TagView className="content-middle gap-4" direction="row">
					<Label>{t("home.language")}</Label>
					<Label weight="semibold">en-US</Label>
					<Switch onValueChange={handleSwitch} value={state.isPtbr} />
					<Label weight="semibold">pt-BR</Label>
				</TagView>
			</TagView>
		</SafeView>
	);
};

export { HomeScreen };
