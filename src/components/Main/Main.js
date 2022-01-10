import React from 'react';
import { Link } from 'react-router-dom';
// import recipes from '../../data.json';

import Button from './Button/Button';
import useFetchRandom from '../../hooks/useFetchRandom';
import './Main.css';

function Main() {
	const randomRecipes = useFetchRandom(3);
	// const [randomRecipes, setRandomRecipes] = useState([recipes])
	// console.log(randomRecipes)

	if (!randomRecipes) {
		return <p>Loading...</p>;
	}
	return (
		<>
			<h2 className="main-title">Current Random Suggestions</h2>
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
