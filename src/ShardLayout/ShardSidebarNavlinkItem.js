import React, { useState } from "react";
import ShardDiv from "../ShardDiv";
import { NavLink } from "react-router";
import ShardA from "../ShardA";

export default function ShardSidebarNavlinkItem(props) {
	const classNames = `shard-sidebar-navlink-item ${props.className ?? ""}`;
	return (
		<ShardA href={props.href} className={classNames}>
			{props.children}
		</ShardA>
	);
}
