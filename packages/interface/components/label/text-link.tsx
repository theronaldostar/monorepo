import type { TextStyle } from "react-native";
import { styled } from "nativewind";
import { TextLink as SolitoLink, type TextLinkProps } from "solito/link";

type Props = TextLinkProps & { style?: TextStyle };

const TextLink = (props: Props) => {
	const { ...rest } = props;

	const Component = styled<Props>(
		({ style, textProps, ...props }) => <SolitoLink textProps={{ ...textProps, style: [style, textProps?.style] }} {...props} />,
		"text-base font-bold hover:underline text-blue-500",
	);

	return <Component {...rest} />;
};

export { TextLink, type Props as TextLinkProps };
