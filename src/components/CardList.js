import React from 'react';
import Card from './card/Card';

const CardList = ({movies}) => {
	
	

	return (
		<div>
			{
				movies.map((user, i) => {
					return (
						<Card 
							key={i.toString()}
							poster={movies[i].poster_path} 
							title={movies[i].title} 
							summary={movies[i].overview} 
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;