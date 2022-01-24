import React from 'react';
import { Link } from 'react-router-dom';
import './Search.css'


function SearchResults({ results }) {
    return (
        <div className='search-results'>
        {results.map((result) => {
            return (
                <Link to={`/${result.id}`}>
                    <div className='result-box'>
                        <img src={result.image} alt={result.title} className='search-image' />
                        <h4 className='search-title'>{result.title}</h4>
                    </div>
                </Link>
                );
            })}
            </div>
            );
        };
        
        export default SearchResults;