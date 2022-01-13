import React from 'react';

function Search(props) {
    return (
        <form>
            <label htmlFor="searchInput">Search</label>
            <input type="text" id="searchInput" />
        <label htmlFor='checkboxInput'>Diet preference</label>
            <select name='checkboxInput' id='checkboxInput'>
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
            
        </form>
        );
    }
    
    export default Search;