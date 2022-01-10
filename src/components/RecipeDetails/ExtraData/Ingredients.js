import React from 'react';

function Ingredients({ ingredients }) {
	return (
		<div className='ingredients'>
			<h4>Ingredients</h4>
			<ul>
				{ingredients.map((ingredient) => {
					return <li key={ingredient.id}>{ingredient.originalString}</li>;
				})}
			</ul>
		</div>
	);
	}
	
	export default Ingredients;
	