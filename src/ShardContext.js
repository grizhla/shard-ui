import React, { useEffect, useState } from "react";
import { shardStyle } from "./css/shardStyle";
import ShardLayout from "./ShardLayout";

export default function ShardContext(props) {
	const [flag, setFlag] = useState(false);
	const [menuLinks, setMenuLinks] = useState(null);
	useEffect(() => {
		if (!window.shard) {
			window.shard = {};
		}
		window.shard = shardStyle;
		document.getElementById("body").style = window.shard.fromJCssToInlineCSS([
			"shard-body",
		]);
		setMenuLinks(props.menuLinks);
		setFlag(true);
	}, []);
	return (
		flag &&
		menuLinks && <ShardLayout menuLinks={menuLinks}>{props.children}</ShardLayout>
	);
}
