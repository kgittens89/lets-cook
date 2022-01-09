import { Link } from 'react-router-dom';
import useFetchRandom from '../../../hooks/useFetchRandom';
import '../Main.css';

function Button() {
	const [randomRecipe] = useFetchRandom(1);
	if (!randomRecipe) {
		return null;
	}
	return (
		<div className='random-btn'>
			<Link to={`${randomRecipe.id}`}>Randomize</Link>
		</div>
	);
}

export default Button;
