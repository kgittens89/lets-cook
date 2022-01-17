import React from 'react';

function SearchResults({ results }) {
    return (
			<>
            {results.map((result) => {
                return (
				<div className='result-box'>
                        <h4>{result.title}</h4>
                        <img src={result.image} alt={result.title} />
				</div>      
                    )
                })}
			</>
		);
}

export default SearchResults;