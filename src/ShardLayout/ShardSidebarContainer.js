import React, { useState } from "react";
import ShardDiv from "../ShardDiv";

export default function ShardSidebarContainer(props) {
	const classNames = `shard-sidebar-container ${props.className ?? ""}`;

	return <ShardDiv className={classNames}> {props.children}</ShardDiv>;
}
