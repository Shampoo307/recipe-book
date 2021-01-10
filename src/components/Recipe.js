import React, { useState } from 'react';
import ListItem from "./ListItem";
import {nanoid} from "nanoid";

export default function Recipe(props) {
	const ingredientList = props.recipe[0].ingredients.map(ingredient => (
			<ListItem
				id={ingredient + nanoid()}
				item={ingredient}
				key={ingredient + nanoid()}
			/>
		)
	);

	const instructionList = props.recipe[0].instructions.map(instruction => (
			<ListItem
				id={instruction + nanoid()}
				item={instruction}
				key={instruction + nanoid()}
			/>
		)
	);

	console.log(props.recipe.name);
	console.log(props);
	console.log(props.recipe[0].name);
	return (
		<div>
			<h1>
				{props.recipe[0].name}
			</h1>
			<h1>
				Ingredients Required
			</h1>
			{ingredientList}
			<h1>
				Cooking Instructions
			</h1>
			{instructionList}
		</div>
	)
}