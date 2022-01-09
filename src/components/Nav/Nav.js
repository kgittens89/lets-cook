import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
	return (
		<nav>
			<Link to='/'>
				<h1>Let's Cook!</h1>
			</Link>

			<Link to='/about'>
				<h2>About</h2>
			</Link>
		</nav>
	);
}

export default Nav;
