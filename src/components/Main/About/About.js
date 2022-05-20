import React from 'react';
import '../../Nav/Nav.css';
import KeishaHeadshot from '../../../assets/KeishaHeadshot.png';

function About() {
	return (
		<div className='about'>
			Let's Cook is a recipe app for people who have trouble deciding on what to
			cook for the day. Stuck on what to make for your next meal? Give Let's
			Cook a try! You are initially presented with 3 random recipe choices.
			Click any of those, if they look appetizing 😋, for more recipe details.
			If you want to keep looking, try out the randomizer button! Happy
			Cooking!!
			<div className='developer'>
				<a
					className='linkedIn'
					target='_blank'
					rel='noreferrer'
					href='https://www.linkedin.com/in/keisha-gittens/'>
					<img className='headshotImg' src={KeishaHeadshot} alt='Keisha' />
				</a>
				<h4>Developed by Keisha Gittens</h4>
				<h5>ⓒ January 2022</h5>
			</div>
		</div>
	);
}

export default About;
