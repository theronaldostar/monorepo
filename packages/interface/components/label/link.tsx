import { Linking, Platform } from "react-native";

import { Label, type LabelProps } from "interface/components/label/component";

interface LinkProps extends LabelProps {
	href?: string;
	target?: "_blank";
}

const Link = (props: LinkProps) => {
	const { className, href, target, ...rest } = props;

	const linkProps = Platform.select<Partial<LinkProps>>({
		web: {
			href,
			target,
			hrefAttrs: {
				rel: "noreferrer",
				target,
			},
		},
		default: {
			onPress: event => {
				props.onPress && props.onPress(event);
				if (Platform.OS !== "web" && href !== undefined) {
					Linking.openURL(href);
				}
			},
		},
	});

	return <Label role="link" className={`!text-blue-500 hover:underline ${className}`} {...linkProps} {...rest} />;
};

export { Link, type LinkProps };
