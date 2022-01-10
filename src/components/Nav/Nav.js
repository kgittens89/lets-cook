import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
	return (
		<ul className='nav'>
			<Link to='/'>
				<li className='logo'>Let's Cook!</li>
			</Link>

			<Link to='/about'>
				<li className='about-link'>About</li>
			</Link>
		</ul>
	);
}

export default Nav;
