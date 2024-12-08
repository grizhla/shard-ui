import React, { useState } from "react";

export default function ShardA(props) {
	const classNames = `shard-a ${props.className ?? ""}`;
	const [style, setStyle] = useState(
		window.shard.fromCssClassStringIntoMergedJCss(classNames)
	);

	return (
		<a
			onMouseOver={() => {
				setStyle({
					...window.shard.fromCssClassStringIntoMergedJCss(classNames),
					...window.shard.fromCssClassStringIntoMergedJCss(
						classNames + " shard-a-hover"
					),
				});
			}}
			onMouseOut={() => {
				setStyle({ ...window.shard.fromCssClassStringIntoMergedJCss(classNames) });
			}}
			href={props.href}
			style={style}>
			{props.children}
		</a>
	);
}

//
