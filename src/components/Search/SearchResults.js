import React from 'react';
import { Link } from 'react-router-dom';

function SearchResults({ results }) {
    return (
        <>
        {results.map((result) => {
            return (
                <Link to={`/${result.id}`}>
                    <div className='result-box'>
                        <h4>{result.title}</h4>
                        <img src={result.image} alt={result.title} />
                    </div>
                </Link>
                );
            })}
            </>
            );
        };
        
        export default SearchResults;