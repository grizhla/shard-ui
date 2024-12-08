import React, { useEffect, useState } from "react";
import ShardHeader from "./ShardLayout/ShardHeader";
import ShardSidebarContainer from "./ShardLayout/ShardSidebarContainer";
import ShardSidebarNavlinkItem from "./ShardLayout/ShardSidebarNavlinkItem";
import ShardDiv from "./ShardDiv";

export default function ShardLayout(props) {
	return (
		<ShardDiv>
			<ShardHeader className="shard-layout-header ">
				<ShardDiv className="shard-layout-banner shard-layout-header">
					&nbsp;
				</ShardDiv>
			</ShardHeader>
			<ShardSidebarContainer className="shard-border shard-layout shard-floating-div-left">
				{props.menuLinks.map((q) => (
					<ShardSidebarNavlinkItem href={q.link}>{q.text}</ShardSidebarNavlinkItem>
				))}
			</ShardSidebarContainer>
			<ShardDiv className="shard-border shard-layout shard-floating-div-right">
				{props.children}
			</ShardDiv>
		</ShardDiv>
	);
}
