import React from 'react';
import { Link } from 'react-router-dom';
import './Search.css'
import { Card, CardContent, CardActionArea, CardMedia, Typography } from '@mui/material';


function SearchResults({ results, imageNotFound }) {
	return (
		<div className='search-results'>
			{results.map((result) => {
				return (
					<Link to={`/${result.id}`}>
						<div className='result-box'>
							<img
								src={result.image ? result.image : imageNotFound}
								alt={result.title}
								className='search-image'
							/>
							<h4 className='search-title'>{result.title}</h4>
						</div>
						{/* <Card sx={{ maxWidth: 300, m: 1, minHeight: 370 }}>
									<CardActionArea>
										<CardMedia
											component='img'
											height='140'
											image={result.image}
											alt='green iguana'
										/>
										<CardContent>
											<Typography gutterBottom variant='h6' component='div'>
												{result.title}
											</Typography>
											<Typography variant='body2' color='text.secondary'>
												Lizards are a widespread group of squamate reptiles,
											</Typography>
										</CardContent>
									</CardActionArea>
								</Card> */}
					</Link>
				);
			})}
		</div>
	);
};
        
        export default SearchResults;