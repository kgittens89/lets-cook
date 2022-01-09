import React from 'react';

function Instructions({ recipeSteps }) {
	return (
		<ol>
			{recipeSteps.map((step) => {
				return <li key={step.number}>{step.step}</li>;
			})}
		</ol>
	);
}

export default Instructions;
