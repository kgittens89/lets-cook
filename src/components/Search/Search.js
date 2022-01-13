import React, { useState } from 'react';

function Search() {
    const initialState = {
			searchInput: '',
			checkboxInput: '',
		};
    const [formState, setFormState] = useState(initialState);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState)
        setFormState(initialState)
    };

    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.id]: event.target.value });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="searchInput">Search</label>
            <input
                type="text"
                id="searchInput"
                onChange={handleChange}
                value={formState.searchInput}
            />
        <label htmlFor='checkboxInput'>Diet preference</label>
            <select
                name='checkboxInput'
                id='checkboxInput'
                onChange={handleChange}
                value={formState.checkboxInput}
            >
                <option value="">Choose</option>
                <option value="glutenFree">Gluten Free</option>
                <option value="keto">Ketogenic</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="lactoVeg">Lacto-Vegetarian</option>
                <option value="ovoVeg">Ovo-Vegetaran</option>
                <option value="vegan">Vegan</option>
                <option value="pescetarian">Pescetarian</option>
                <option value="paleo">Paleo</option>
                <option value="primal">Primal</option>
                <option value="lowFodMap">Low FODMAP</option>
                <option value="whole30">Whole30</option>
            </select>
            <button type="submit">Submit</button>
        </form>
        );
    }
    
    export default Search;