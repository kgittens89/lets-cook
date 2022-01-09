import React from 'react';
import { Link } from 'react-router-dom';

import Button from './Button/Button';
import useFetchRandom from '../../hooks/useFetchRandom';
import './Main.css';

function Main() {
	const randomRecipes = useFetchRandom(3);

	if (!randomRecipes) {
		return <p>Loading...</p>;
	}
	return (
		<>
			<h2>Current Random Suggestions</h2>
			<div className='random-recipe-card'>
				{randomRecipes.map((recipe) => {
					return (
						<Link to={`/${recipe.id}`} key={recipe.id}>
							<div className='img-card'>
								<img src={recipe.image} alt={recipe.title} />
								<h2>{recipe.title}</h2>
							</div>
						</Link>
					);
				})}
			</div>
			<Button />
		</>
	);
}

export default Main;
