import React, { useState } from 'react';

export default function Form(props) {
	const [text, setText] = useState('');
	const [validInput, setValidInput] = useState(true);
	
	function handleChange(e) {
		setText(e.target.value);
	}
	
	function handleSubmit(e) {
		e.preventDefault();
		if (text !== '') {
			setValidInput(true);
			props.onSubmit(text);
			setText('')
		} else {
			setValidInput(false);
		}
		
	}
	
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="ingredient-input">
				{props.type}
			</label>
			<input
				className={validInput ? 'valid-input' : 'invalid-input'}
				id={props.type + '-input'}
				type="text"
				name="text"
				autoComplete="off"
				value={text}
				onChange={handleChange}
			/>
			<button
				className="add-button"
			>
				Add
			</button>
		</form>
	)
}