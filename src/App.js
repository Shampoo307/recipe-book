import React, { useState } from 'react';
import './App.css';
import { nanoid } from "nanoid";
import ListItem from "./components/ListItem";
import RecipeForm from "./components/RecipeForm";
import RecipeItem from "./components/RecipeItem";
import Recipe from "./components/Recipe";

function App() {
	const [isCreating, setIsCreating] = useState(false);
	const [recipes, setRecipes] = useState([]);
	
	const [viewingRecipe, setViewingRecipe] = useState(false);
	const [recipeInView, setRecipeInView] = useState([]);
	
	const [ingredients, setIngredients] = useState([]);
	function onIngredientSubmit(ingredient) {
		const newIngredient = ingredient;
		setIngredients([...ingredients, newIngredient]);
	}
	
	
	const [instructions, setInstructions] = useState([]);
	function onInstructionSubmit(instruction) {
		const newInstruction = instruction;
		setInstructions([...instructions, newInstruction]);
	}
	
	const [recipeName, setRecipeName] = useState('');
	function onRecipeChange(e) {
		setRecipeName(e.target.value);
	}
	
	function handleRecipeClick(recipeID) {
		viewRecipe(recipeID);
		console.log(recipeID);
	}
	
	const ingredientList = ingredients.map(ingredient => (
		<ListItem
			id={ingredient + nanoid()}
			item={ingredient}
			key={ingredient + nanoid()}
		/>
		)
	);
	
	const instructionList = instructions.map(instruction => (
			<ListItem
				id={instruction + nanoid()}
				item={instruction}
				key={instruction + nanoid()}
			/>
		)
	);
	
	const recipeList = recipes.map(recipe => (
		<li>
			<RecipeItem
				id={recipe.id}
				recipeName={recipe.name}
				key={recipe.name + nanoid()}
				viewRecipe={handleRecipeClick}
			/>
		</li>
	))
	
	
	
	function saveRecipe(recipe) {
		const newRecipe = {name: recipeName, ingredients: ingredients, instructions: instructions, id: recipeName + nanoid()};
		setRecipes([...recipes, newRecipe])
		
		discardRecipe();
		
	}
	
	function discardRecipe() {
		setIngredients([]);
		setInstructions([]);
		setIsCreating(false);
		setRecipeName('');
		setViewingRecipe(false);
		setRecipeInView([]);
	}
	
	function viewRecipe(id) {
		console.log('viewRecipe(id) -> id: ' + id);
		const remainingRecipe = recipes.filter(recipe => id === recipe.id);
		console.log('recipes:  ' + recipes);
		setViewingRecipe(true);
		setRecipeInView(remainingRecipe);
		console.log(remainingRecipe);
	}
	
	const viewRecipeTemplate = (
		<div>
			<Recipe
				recipe={recipeInView}
				setRecipes={setRecipes}
				recipes={recipes}
				resetValues={discardRecipe}
			/>
		</div>
	)
	
	const viewAllTemplate = (
		<div>
			<ul>
				{recipeList}
			</ul>
		</div>
	)
	
	const createTemplate = (
		<div>
			<RecipeForm
				saveRecipe={saveRecipe}
				discardRecipe={discardRecipe}
				onIngredientSubmit={onIngredientSubmit}
				onInstructionSubmit={onInstructionSubmit}
				ingredientList={ingredientList}
				instructionList={instructionList}
				setRecipeName={onRecipeChange}
				recipeName={recipeName}
			/>
		</div>
	)
	
	return (
		<div className="App">
			<header className="App-header">
				<h1>Recipe Book</h1>
				<button
					className="core-buttons"
					onClick={() => {
					setIsCreating(false)
					setViewingRecipe(false);
					setRecipeInView([]);
					discardRecipe();
				}}>
					View Recipes
				</button>
				<button
					className="core-buttons"
					onClick={() => setIsCreating(true)}
				>
					Create Recipe
				</button>
				
				{
				// If creating -> creation template
				// Else if viewing recipe -> recipe template
				// Else -> view all
				isCreating ? createTemplate : (viewingRecipe ? viewRecipeTemplate : viewAllTemplate)
				}
				
			</header>
		</div>
	);
}

export default App;
