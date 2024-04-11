import { Children, cloneElement, forwardRef, type ReactElement } from "react";
import { View } from "react-native";

import { useClass as clsx } from "@hooks/class";

import { Label } from "ui/components/label";
import { TagView, type TagViewProps } from "ui/layout";
import { optGroup } from "ui/components/select/class";

interface OptGroupProps extends TagViewProps {
	disabled?: boolean;
	title: string;
}

const OptGroup = forwardRef<View, OptGroupProps>(({ children, className, disabled, title, ...props }, ref) => {
	const classNames = optGroup({ className, disabled });

	return (
		<TagView className={classNames} ref={ref} {...props}>
			<Label size="lg" weight="semibold" className="select-none">
				{title}
			</Label>
			<TagView className="gap-1">
				{Children.map(children as ReactElement, child => {
					const { className, ...rest } = child.props;
					const clsxName = clsx("pl-6", className);
					return cloneElement(child, { className: clsxName, ...rest });
				})}
			</TagView>
		</TagView>
	);
});

export default OptGroup;
export { OptGroup, type OptGroupProps };
