import React, { useEffect, useLayoutEffect, useState } from "react";
import ShardH from "./ShardH";
import ShardDiv from "./ShardDiv";

export default function ShardCard(props) {
	const classNames = `shard-card ${props.className ?? ""}`;
	return (
		<ShardDiv className={classNames}>
			{props.title && (
				<ShardH level={1} className="shard-card-title">
					{props.title}
				</ShardH>
			)}
			<ShardDiv className="shard-card-content">{props.children}</ShardDiv>
			<ShardDiv className="shard-card-footer">{props.footer}</ShardDiv>
		</ShardDiv>
	);
}
