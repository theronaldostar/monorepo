import { forwardRef } from "react";
import { Image as ExpoImage, ImageProps as ExpoImageProps } from "expo-image";

interface ImageProps extends ExpoImageProps {
	src: string;
	width?: number;
	height?: number;
	placeholder?: string;
}

const Image = forwardRef<ExpoImage, ImageProps>(({ src, placeholder, height, width, style, ...rest }, ref) => {
	const blurhash =
		"|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

	const props = {
		ref,
		source: typeof src === "string" ? { uri: src } : src,
		placeholder: { blurhash: placeholder ?? blurhash },
		style: [{ height, width }, style],
		...rest,
	};

	return <ExpoImage contentFit="cover" transition={0} {...props} />;
});

export { Image, type ImageProps };
