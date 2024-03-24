import { forwardRef } from "react";
import { Linking, Platform, Text, type GestureResponderEvent } from "react-native";

import { useClass } from "@hooks/class";

import { Label, type LabelProps } from "ui/components/label/component";

type Url = `${"http" | "https"}://${string}` | `${"#" | "/"}${string}`;
type Mail = `mailto:${string}@${string}.${string}`;
type TelSms = `${"tel" | "sms"}:+${number}`;

interface LinkProps extends LabelProps {
	download?: boolean | string;
	href: Url | Mail | TelSms;
	rel?: string;
	target?: "_blank" | "_self" | "_parent" | "_top";
}

const Link = forwardRef<Text, LinkProps>((props, ref) => {
	const { children, className, download, href, onPress, rel = "noreferrer", target, ...rest } = props;

	const classNames = useClass("!text-blue-500 hover:underline active:underline", className);

	const linkProps = Platform.select({
		default: {},
		native: {
			onPress: (event: GestureResponderEvent) => {
				onPress?.(event);
				Linking.canOpenURL(href).then(auth => {
					if (auth) Linking.openURL(href);
				});
			},
		},
		web: {
			href,
			hrefAttrs: {
				download,
				rel,
				target,
			},
		},
	});

	return (
		<Label className={classNames} ref={ref} role="link" {...linkProps} {...rest}>
			{children}
		</Label>
	);
});

export { Link, type LinkProps };
