import React, { useState } from 'react';
import Form from "./Form";

export default function RecipeForm(props) {
	const [validInput, setValidInput] = useState(true);
	
	function handleClick(e) {
		// Must have name, and at least 1 ingredient and instruction
		if (props.recipeName !== ''
		&& props.ingredientList.length !== 0
		&& props.instructionList.length !== 0) {
			setValidInput(true);
			props.saveRecipe();
		} else {
			setValidInput(false);
		}
	}
	
	return (
		<div>
			<h2>Create Your Recipe</h2>
			<div className="core-buttons-container">
				<button
					className="core-buttons"
					onClick={handleClick}
				>
					Save
				</button>
				<button
					className="core-buttons"
					onClick={props.discardRecipe}
				>
					Discard
				</button>
			</div>
			<div className="recipe-form-container">
				<div className="recipe-name">
					<label
						htmlFor="recipe-name-input"
						className={validInput ? 'valid-input' : 'invalid-input'}
					>
						Name your Recipe
					</label>
					<input
						type="text"
						id="recipe-name-input"
						autoComplete="off"
						onChange={props.setRecipeName}
					/>
				</div>
				<div className="recipe-inputs">
					<Form
						type="Ingredients"
						onSubmit={props.onIngredientSubmit}
					/>
					<ul>
						{props.ingredientList}
					</ul>
					<Form
						type="Instructions"
						onSubmit={props.onInstructionSubmit}
					/>
					<ul>
						{props.instructionList}
					</ul>
				</div>
				
				
			</div>
		</div>
	)
}