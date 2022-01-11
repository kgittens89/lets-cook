import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from './components/Nav/About/About';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';

function App() {
	return (
		<div className='container'>
			<nav>
				<Nav />
			</nav>
			<main>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/:id' element={<RecipeDetails />} />
					<Route path='/about' element={<About />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
