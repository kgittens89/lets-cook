import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from './components/Main/About/About';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import Search from './components/Search/Search';

function App() {
	return (
		<div className='container'>
				<Nav />
			<main>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/:id' element={<RecipeDetails />} />
					<Route path='/about' element={<About />} />
					<Route path='/search' element={<Search />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
