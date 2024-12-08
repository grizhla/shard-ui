import React from "react";

export default function ShardDiv(props) {
	const classNames = `shard-div ${props.className ?? ""}`;
	return (
		<div
			style={{
				...window.shard.fromCssClassStringIntoMergedJCss(classNames),
			}}>
			{props.children}
		</div>
	);
}
