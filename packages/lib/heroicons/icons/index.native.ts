import Svg, { Circle, Path } from "react-native-svg";
import { cssInterop } from "nativewind";

cssInterop(Svg, {
	className: {
		target: "style",
		nativeStyleToProp: { width: true, height: true, color: true },
	},
});

cssInterop(Circle, {});

cssInterop(Path, {});

export * from "@lib/heroicons/icons/arrow-path";
export * from "@lib/heroicons/icons/banknotes";
export * from "@lib/heroicons/icons/bars";
export * from "@lib/heroicons/icons/building-library";
export * from "@lib/heroicons/icons/chart-pie";
export * from "@lib/heroicons/icons/check";
export * from "@lib/heroicons/icons/chevron-down";
export * from "@lib/heroicons/icons/chevron-up";
export * from "@lib/heroicons/icons/circle";
export * from "@lib/heroicons/icons/clipboard-document-list";
export * from "@lib/heroicons/icons/cpu-chip";
export * from "@lib/heroicons/icons/document-duplicate";
export * from "@lib/heroicons/icons/envelope";
export * from "@lib/heroicons/icons/eye-slash";
export * from "@lib/heroicons/icons/eye";
export * from "@lib/heroicons/icons/key";
export * from "@lib/heroicons/icons/lock-closed";
export * from "@lib/heroicons/icons/lock-open";
export * from "@lib/heroicons/icons/star";
export * from "@lib/heroicons/icons/trophy";
export * from "@lib/heroicons/icons/user-circle";
export * from "@lib/heroicons/icons/user-group";
export * from "@lib/heroicons/icons/users";
export * from "@lib/heroicons/icons/wallet";
