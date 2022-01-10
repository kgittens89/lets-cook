import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Ingredients from './ExtraData/Ingredients';
import Instructions from './ExtraData/Instructions';

import styles from './RecipeDetails.module.css';
import brownBagImage from '../brown.jpeg';
import mainImage from '../nordwood-themes-Tmz8FThN_BE-unsplash.jpg';

function RecipeDetails() {
	const [recipe, setRecipe] = useState(null);
	const [recipeSteps, setRecipeSteps] = useState([]);
	const [ingredients, setIngredients] = useState([]);
	const [errorState, setErrorState] = useState(false);
	const { id } = useParams();

	useEffect(() => {
		getRecipeDetails();
		document.body.style.backgroundImage = `url(${brownBagImage})`;

		return () => {
			document.body.style.backgroundImage = `url(${mainImage})`;
		};
		//eslint-disable-next-line
	}, []);

	const getRecipeDetails = () => {
		fetch(
			`https://api.spoonacular.com/recipes/${id}/information?&apiKey=${process.env.REACT_APP_API_KEY}`
		)
			.then((res) => {
				if (res.status !== 200) {
					setErrorState(true)
				}
				return res.json()
			})
			.then((res) => {
				setRecipe(res);
				setRecipeSteps(res.analyzedInstructions[0].steps);
				setIngredients(res.extendedIngredients);
			})
			.catch(err => console.log(err))
	};

	if (!recipe) {
		return <p>Loading...</p>;
	}
	return (
		<div className={styles.details}>
			<div>
				<h2 className={styles.title}>{recipe.title}</h2>
				<img src={recipe.image} alt={recipe.title} className={styles.img} />

				{/* Link used to take html tags out of string.
            https://www.geeksforgeeks.org/how-to-strip-out-html-tags-from-a-string-using-javascript/ */}

				<p className={styles.summary}>
					{recipe.summary.replace(/(<([^>]+)>)/gi, '')}
				</p>
			</div>
			<div className={styles.bottom_section}>
				{!ingredients ? (
					<p>Loading...</p>
				) : (
					<Ingredients ingredients={ingredients} />
				)}
				{!recipeSteps ? (
					<p>Loading...</p>
				) : (
					<Instructions recipeSteps={recipeSteps} />
				)}
			</div>
			<p style={{display: errorState ? 'inline' : 'none'}}>Response Error</p>
		</div>
	);
}

export default RecipeDetails;
