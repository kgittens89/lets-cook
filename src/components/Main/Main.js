import React from 'react';
import { Link } from 'react-router-dom';

import useFetchRandom from '../../hooks/useFetchRandom';

import Button from './Button/Button';
import './Main.css';

function Main() {
	const randomRecipes = useFetchRandom(6);

	if (!randomRecipes) {
		return <p>Loading...</p>;
	}
	return (
		<>
			<h2 className="main-title">Random Recipe Suggestions</h2>
			<div className='random-recipe-card'>
				{randomRecipes.map((recipe) => {
					return (
						<Link to={`/${recipe.id}`} key={recipe.id}>
							<div className='img-card'>
								<img src={recipe.image} alt={recipe.title} />
								<p>{recipe.title}</p>
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
