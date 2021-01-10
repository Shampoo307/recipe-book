import React, { useState } from 'react';

export default function RecipeItem(props) {
	function handleClick(e) {
		props.viewRecipe(props.id);
	}
	
	return (
		<div>
			<button
				onClick={handleClick}
			>
				{props.recipeName}
			</button>
		</div>
	)
}