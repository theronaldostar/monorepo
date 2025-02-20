import { forwardRef } from "react";
import { Image as ExpoImage, ImageProps as ExpoImageProps } from "expo-image";

import { ValidUrl } from "ui/components/label";

interface ImageProps extends ExpoImageProps {
	src: ValidUrl;
	width?: number;
	height?: number;
	size?: number;
	placeholder?: string;
}

const Image = forwardRef<ExpoImage, ImageProps>(({ src, width, height, size, style, placeholder, ...props }, ref) => {
	const blurhash =
		"|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

	const allProps = {
		ref,
		source: typeof src === "string" ? { uri: src } : src,
		style: [{ width: width ?? size, height: height ?? size }, style],
		...props,
	};

	return <ExpoImage contentFit="cover" placeholder={{ blurhash: placeholder ?? blurhash }} transition={0} {...allProps} />;
});

export { Image, type ImageProps };
