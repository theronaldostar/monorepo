import { Children, cloneElement, type ReactElement } from "react";

import Label from "ui/components/label";
import { optGroup } from "ui/components/select/styles";
import { TagView, type TagViewProps } from "ui/layout";

import { clsx } from "utils";

interface OptGroupProps extends TagViewProps {
	disabled?: boolean;
	title: string;
}

const OptGroup = ({ children, className, disabled, title, ...props }: OptGroupProps) => {
	const classNames = optGroup({ className, disabled });

	return (
		<TagView className={classNames} {...props}>
			<Label children={title} className="select-none" leading="none" size="lg" weight="semibold" />

			<TagView className="gap-1 border-t border-slate-600 pt-2 dark:border-slate-200">
				{Children.map(children as ReactElement<TagViewProps>, child => {
					const { className, ...rest } = child.props;
					const clsxName = clsx("pl-6", className);
					return cloneElement(child, { className: clsxName, ...rest });
				})}
			</TagView>
		</TagView>
	);
};

export { OptGroup, type OptGroupProps };
