import React from 'react';
import './Card.css'

const Card = ({poster, summary, title}) => {
	return (
		<div className='tc bg-light-pink dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img id='card' alt='movie poster' src={`https://image.tmdb.org/t/p/w200/${poster}`} />
			<div id='sum'>
				<h2 id='title'>{title}</h2>
				<p title={`${summary}`} id='sum' className='f6 lh-copy measure mt2 mid-gray'>{summary}</p>
			</div>
		</div>

	);
}

export default Card;