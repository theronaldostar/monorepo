import Svg, { Circle, Path } from "react-native-svg";
import { cssInterop } from "nativewind";

cssInterop(Circle, {});
cssInterop(Path, {});
cssInterop(Svg, {
	className: {
		target: "style",
		nativeStyleToProp: { width: true, height: true, color: true },
	},
});

export * from "@lib/lucide/icons/check";
export * from "@lib/lucide/icons/chevron-down";
export * from "@lib/lucide/icons/chevron-up";
export * from "@lib/lucide/icons/circle";
export * from "@lib/lucide/icons/eye-off";
export * from "@lib/lucide/icons/eye";
export * from "@lib/lucide/icons/mail";
export * from "@lib/lucide/icons/void";
