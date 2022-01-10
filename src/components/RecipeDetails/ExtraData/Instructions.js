import React from 'react';

function Instructions({ recipeSteps }) {
	return (
		<div className='instructions'>
			<h4>Instructions</h4>
			<ol>
				{recipeSteps.map((step) => {
					return <li key={step.number}>{step.step}</li>;
				})}
			</ol>
		</div>
	);
	}
	
	export default Instructions;
	