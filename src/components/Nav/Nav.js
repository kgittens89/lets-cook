import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
	return (
		<nav>
			<ul className='nav'>
				<li>
					<Link to='/' className='logo'>
						Let's Cook!
					</Link>
				</li>

				<li>
					<Link to='/search' className='search'>
						Search
					</Link>
				</li>

				<li>
					<Link to='/about' className='about-link'>
						About
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
