import { forwardRef } from "react";
import { Linking, Platform, Text, type GestureResponderEvent } from "react-native";

import { Label, type LabelProps } from "ui/components/label/component";

import { clsx } from "utils";

type Mail = `mailto:${string}@${string}.${string}`;
type ValidUrl = `${"http" | "https"}://${string}` | `${"#" | "/"}${string}` | `/@fs/${string}`;
type TelSms = `${"tel" | "sms"}:+${number}`;

interface LinkProps extends LabelProps {
	download?: boolean | string;
	href: ValidUrl | Mail | TelSms;
	rel?: string;
	target?: "_blank" | "_self" | "_parent" | "_top";
}

const Link = forwardRef<Text, LinkProps>(({ children, className, download, href, onPress, rel = "noreferrer", target, ...props }, ref) => {
	const classNames = clsx("!text-blue-500 hover:underline active:underline", className);

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
			hrefAttrs: { download, rel, target },
		},
	});

	return (
		<Label className={classNames} ref={ref} role="link" {...linkProps} {...props}>
			{children}
		</Label>
	);
});

export { Link, type Mail, type LinkProps, type TelSms, type ValidUrl };
