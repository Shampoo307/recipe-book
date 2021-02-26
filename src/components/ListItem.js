import React, { useState } from 'react';

export default function ListItem(props) {
	
	return (
		<div>
			<li>
				<button
					// onClick={}
				>
					{props.item}
				</button>
			</li>
		</div>
	)
}