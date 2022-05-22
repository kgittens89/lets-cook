import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from './components/Main/About/About';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import Search from './components/Search/Search';

import imageNotFound from './assets/Image_not_available.png'

function App() {
	return (
		<div className='container'>
			<Nav />
			<main>
				<Routes>
					<Route path='/' element={<Main imageNotFound={imageNotFound} />} />
					<Route
						path='/:id'
						element={<RecipeDetails imageNotFound={imageNotFound} />}
					/>
					<Route
						path='/about'
						element={<About />}
					/>
					<Route
						path='/search'
						element={<Search />}
					/>
				</Routes>
			</main>
		</div>
	);
}

export default App;
