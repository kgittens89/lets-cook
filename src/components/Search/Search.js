import React, { useState } from 'react';
import SearchResults from './SearchResults';
import './Search.css';
import {
	TextField,
	InputLabel,
	MenuItem,
	Select,
	FormControl
} from '@mui/material';


function Search() {
    const initialState = {
			searchInput: '',
			checkboxInput: '',
		};
    const [formState, setFormState] = useState(initialState);
    const [searchResults, setSearchResults] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchSearchResults()
        setFormState(initialState)
    };

	const handleChange = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value });
    }

    const fetchSearchResults = () => {
        let url = `https://api.spoonacular.com/recipes/complexSearch?query=${formState.searchInput.toLowerCase()}&${formState.checkboxInput.toLowerCase()}&number=15&apiKey=${process.env.REACT_APP_API_KEY}`;

        fetch(url)
            .then(res => res.json())
            .then(res => setSearchResults(res.results))
            .catch(err => console.log(err))
    }

    return (
			<>
				<form onSubmit={handleSubmit} className='search-form'>
					<FormControl sx={{ m: 1, minWidth: 150 }}>
						<TextField
							name='searchInput'
							label='Search'
							type='search'
							value={formState.searchInput}
							onChange={handleChange}
						/>
					</FormControl>
					<FormControl sx={{ m: 1, minWidth: 150 }}>
						<InputLabel id='checkboxInput'>Diet preference</InputLabel>
						<Select
							name='checkboxInput'
							id='checkboxInput'
							onChange={handleChange}
							value={formState.checkboxInput}>
							<MenuItem value=''>Choose</MenuItem>
							<MenuItem value='glutenFree'>Gluten Free</MenuItem>
							<MenuItem value='keto'>Ketogenic</MenuItem>
							<MenuItem value='vegetarian'>Vegetarian</MenuItem>
							<MenuItem value='lactoVeg'>Lacto-Vegetarian</MenuItem>
							<MenuItem value='ovoVeg'>Ovo-Vegetaran</MenuItem>
							<MenuItem value='vegan'>Vegan</MenuItem>
							<MenuItem value='pescetarian'>Pescetarian</MenuItem>
							<MenuItem value='paleo'>Paleo</MenuItem>
							<MenuItem value='primal'>Primal</MenuItem>
							<MenuItem value='lowFodMap'>Low FODMAP</MenuItem>
							<MenuItem value='whole30'>Whole30</MenuItem>
						</Select>
						<button type='submit' className='search-button'>
							Submit
						</button>
					</FormControl>
				</form>
				<SearchResults results={searchResults} />
			</>
		);
    }
    
    export default Search;