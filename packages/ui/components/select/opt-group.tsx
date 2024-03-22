import { Children, cloneElement, forwardRef, type ReactElement } from "react";
import { View } from "react-native";

import { useClass as cls } from "@config/hooks";

import { Label } from "ui/components/label";
import { TagView, type TagViewProps } from "ui/layout";
import { optGroup } from "ui/components/select/class";

interface OptGroupProps extends TagViewProps {
	disabled?: boolean;
	title: string;
}

const OptGroup = forwardRef<View, OptGroupProps>((props, ref) => {
	const { children, className, disabled, title, ...rest } = props;

	const classNames = optGroup({ className, disabled });

	return (
		<TagView className={classNames} ref={ref} {...rest}>
			<Label size="lg" weight="semibold" className="select-none">
				{title}
			</Label>
			<TagView className="gap-y-1">
				{Children.map(children as ReactElement, child => {
					const { className, ...rest } = child.props;
					const clsName = cls("pl-6", className);

					return cloneElement(child, { className: clsName, ...rest });
				})}
			</TagView>
		</TagView>
	);
});

export default OptGroup;
export { OptGroup, type OptGroupProps };
