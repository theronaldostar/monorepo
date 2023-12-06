import type { TextStyle } from "react-native";
import { styled } from "nativewind";
import { TextLink as SolitoLink, type TextLinkProps as TLProps } from "solito/link";

type TextLinkProps = TLProps & { style?: TextStyle };

const TextLink = (props: TextLinkProps) => {
	const { ...rest } = props;

	const Component = styled<TextLinkProps>(
		({ style, textProps, ...props }) => <SolitoLink textProps={{ ...textProps, style: [style, textProps?.style] }} {...props} />,
		"text-base font-bold hover:underline text-blue-500",
	);

	return <Component {...rest} />;
};

export { TextLink, type TextLinkProps };
