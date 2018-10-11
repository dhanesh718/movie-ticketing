import React from 'react';
import './Card.css'

const Card = ({poster, summary, title}) => {
	return (
		<div className='tc bg-light-pink dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img id='pic' alt='movie poster' src={`https://image.tmdb.org/t/p/w200/${poster}`} />
			<div id='card'>
				<h1 title={`${title}`} id='title'>{title}</h1>
				<p title={`${summary}`} className='f6 lh-copy measure mt2 mid-gray'>{summary}</p>
			</div>
		</div>

	);
}

export default Card;