import React from "react";

export default function ShardP(props) {
	const classNames = `shard-p ${props.className ?? ""}`;

	return (
		<p
			style={{
				...window.shard.fromCssClassStringIntoMergedJCss(classNames),
			}}>
			{props.children}
		</p>
	);
}
