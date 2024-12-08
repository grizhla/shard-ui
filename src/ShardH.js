import React from "react";

export default function ShardH(props) {
	const classNames = `shard-h shard-h-${props.level} ${props.className ?? ""}`;

	const style = {
		...window.shard.fromCssClassStringIntoMergedJCss(classNames),
	};

	let HComp = null;
	switch (props.level) {
		case 1:
			HComp = <h1 style={style}>{props.children}</h1>;
			break;
		case 2:
			HComp = <h2 style={style}>{props.children}</h2>;
			break;
		case 3:
			HComp = <h3 style={style}>{props.children}</h3>;
			break;
		case 4:
			HComp = <h4 style={style}>{props.children}</h4>;
			break;
		case 5:
			HComp = <h5 style={style}>{props.children}</h5>;
			break;
		case 6:
			HComp = <h6 style={style}>{props.children}</h6>;
			break;
		default:
			throw new Error("Level Of ShardH must be within the numbers 1 to 6");
	}

	return HComp;
}
