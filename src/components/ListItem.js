import React, { useState } from 'react';

export default function ListItem(props) {
	return (
		<div>
			<li>{props.item}</li>
		</div>
	)
}