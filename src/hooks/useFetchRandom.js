import { useState, useEffect } from 'react';

function useFetchRandom(num = 3) {
	const [randomRecipes, setRandomRecipes] = useState([]);

	useEffect(() => {
		fetchRandomRecipes(num);
		//eslint-disable-next-line
	}, []);

	const fetchRandomRecipes = (num) => {
		let url = `https://api.spoonacular.com/recipes/random?number=${num}&apiKey=${process.env.REACT_APP_API_KEY}`;

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log(res.recipes);
				setRandomRecipes(res.recipes);
			});
	};
	return randomRecipes;
}

export default useFetchRandom;
