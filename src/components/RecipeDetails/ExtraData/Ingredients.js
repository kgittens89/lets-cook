import React from 'react';

function Ingredients({ ingredients }) {
	return (
		<ul>
			{ingredients.map((ingredient) => {
				return <li key={ingredient.id}>{ingredient.originalString}</li>;
			})}
		</ul>
	);
}

export default Ingredients;
