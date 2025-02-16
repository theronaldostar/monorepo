import { forwardRef } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

import tvClass from "ui/layout/view/class";
import type { TagViewProps } from "ui/layout/view/tag-view";

import { clsx } from "utils";

interface SafeViewProps extends TagViewProps {
	webSafe?: boolean;
}

const SafeView = forwardRef<SafeAreaView, SafeViewProps>(({ center, className, direction, height, overflow, webSafe, width, ...props }, ref) => {
	const baseClass = clsx("flex-1 web:overflow-y-auto web:scroll-none", className, webSafe && "web:py-6");
	const classNames = tvClass({ className: baseClass, center, direction, height, overflow, width });

	return <SafeAreaView className={classNames} ref={ref} style={styles.safe} {...props} />;
});

const styles = StyleSheet.create({
	safe: {
		marginTop: StatusBar.currentHeight ?? 0,
		marginBottom: (StatusBar.currentHeight ?? 0) / 2,
	},
});

export { SafeView };
