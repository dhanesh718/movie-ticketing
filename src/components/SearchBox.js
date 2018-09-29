import React from 'react';


// {searchfield, searchChange}

const SearchBox = ({searchfield, searchChange}) => {
	return(
		<div className='pa2'>
			<input
				className='pa3 ba b--green bg-lightest-pink'  
				type='search' 
				placeholder='search movies' 
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;