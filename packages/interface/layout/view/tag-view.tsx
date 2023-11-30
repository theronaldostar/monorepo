import { View, type ViewProps } from "react-native";
import { styled } from "nativewind";

import { useBuilder } from "@config/hooks";

type TagViewProps = ViewProps;

const TagView = (props: TagViewProps) => {
	const { className, ...rest } = props;

	const baseClass = useBuilder("", className);

	const Component = styled(View, baseClass);

	return <Component {...rest} />;
};

export { TagView, type TagViewProps };
