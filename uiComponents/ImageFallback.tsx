import Image from "next/image";
import { useEffect, useState } from "react";

const imgLoader = ({ src, width, quality = 75 }: { src: string; width: number; quality?: number }) => {
	return `${src}?w=${width}&q=${quality}`;
};

export default function ImageFallback({ src, fallbackSrc = "/images/md-no-image.png", ...rest }: {
	[x: string]: any;
	src?: string;
	fallbackSrc?: string;
}) {
	const [imgSrc, set_imgSrc] = useState(src);

	useEffect(() => {
		set_imgSrc(src);
	}, [src]);

	return (
		<Image
			{...rest}
			src={imgSrc || fallbackSrc}
			loader={imgLoader}
			onLoadingComplete={(result) => {
				if (result.naturalWidth === 0) {
					// Broken image
					set_imgSrc(fallbackSrc);
				}
			}}
			onError={() => {
				set_imgSrc(fallbackSrc);
			}}
		/>
	);
}
