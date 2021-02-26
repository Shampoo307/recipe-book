import React, { useState } from 'react';
import ListItem from "./ListItem";
import {nanoid} from "nanoid";

export default function Recipe(props) {
	const [isEditing, setIsEditing] = useState(false);
	const [newName, setNewName] = useState('');
	const [newIngredients, setNewIngredients] = useState([]);
	const [newInstructions, setNewInstructions] = useState([]);
	
	function handleEdit() {
		setIsEditing(true);
		setNewName(props.recipe[0].name);
		setNewIngredients(props.recipe[0].ingredients);
		setNewInstructions(props.recipe[0].instructions);
	}
	
	function handleDelete() {
		props.setRecipes(props.recipes.filter(recipe => (
			recipe.id !== props.recipe[0].id
			))
		);
		props.resetValues();
	}
	
	function handleSave() {
		const newRecipe = {name: newName, ingredients: newIngredients, instructions: newInstructions, id: props.recipe[0].id};
		const otherRecipes = props.recipes.filter(recipe => (
			recipe.id !== props.recipe[0].id
		));
		handleDelete();
		props.setRecipes([...otherRecipes, newRecipe])
		props.resetValues();
		setIsEditing(false);
	}
	
	function handleCancel() {
		setNewName('');
		setNewIngredients([]);
		setNewInstructions([]);
		setIsEditing(false);
	}
	
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
	
	const newIngredientList = newIngredients.map(ingredient => (
			<ListItem
				id={ingredient + nanoid()}
				item={ingredient}
				key={ingredient + nanoid()}
			/>
		)
	);
	
	const newInstructionList = newInstructions.map(instruction => (
			<ListItem
				id={instruction + nanoid()}
				item={instruction}
				key={instruction + nanoid()}
			/>
		)
	);

	const viewingTemplate = (
		<div>
			<div>
				<h1>
					{props.recipe[0].name}
				</h1>
				<button
					className="core-buttons"
					onClick={handleEdit}
				>
					Edit
				</button>
				<button
					className="core-buttons"
					onClick={handleDelete}
				>
					Delete
				</button>
			</div>
			<div>
				<h1>
					Ingredients Required
				</h1>
				{ingredientList}
				<h1>
					Cooking Instructions
				</h1>
				{instructionList}
			</div>
		</div>
	);
	
	const editingTemplate = (
		<div>
			<div>
				<h1>
					{newName}
				</h1>
				<button
					className="core-buttons"
					onClick={handleSave}
				>
					Save
				</button>
				<button
					className="core-buttons"
					onClick={handleCancel}
				>
					Cancel
				</button>
			</div>
			<div>
				<h1>
					Ingredients Required
				</h1>
				{newIngredientList}
				<h1>
					Cooking Instructions
				</h1>
				{newInstructionList}
			</div>
		</div>
	);
	
	return (
		<div>
			{isEditing ? editingTemplate : viewingTemplate}
		</div>
	)
}