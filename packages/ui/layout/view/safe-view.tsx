import { forwardRef } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

import { useClass } from "@hooks/class";

import { element } from "ui/layout/view/class";
import type { TagViewProps } from "ui/layout/view/tag-view";

interface SafeViewProps extends TagViewProps {
	webSafe?: boolean;
}

const SafeView = forwardRef<SafeAreaView, SafeViewProps>((props, ref) => {
	const { center, className, direction, height, overflow, webSafe, width, ...rest } = props;

	const baseClass = useClass("flex-1 web:overflow-y-auto web:scroll-none", className, webSafe && "web:py-6");
	const classNames = element({ className: baseClass, center, direction, height, overflow, width });

	return <SafeAreaView className={classNames} ref={ref} style={styles.safe} {...rest} />;
});

const styles = StyleSheet.create({
	safe: {
		paddingTop: StatusBar.currentHeight,
		paddingBottom: StatusBar.currentHeight ?? 0 / 2,
	},
});

export { SafeView };
