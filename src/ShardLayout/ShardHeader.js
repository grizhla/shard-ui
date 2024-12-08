import React from "react";
import ShardDiv from "../ShardDiv";
export default function ShardHeader(props) {
	const classNames = `shard-header ${props.className ?? ""}`;
	return <ShardDiv className={classNames}>{props.children}</ShardDiv>;
}
