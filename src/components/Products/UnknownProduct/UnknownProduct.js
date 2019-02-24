import React from 'react';
import questionMark from './question-mark.png';
import './UnknownProduct.css';

const UnknownProduct = () => {
	return(
		<div className='UnknownProduct product'>
			<img 
				className='question-mark'
				src={questionMark}
				alt='question mark'
			/>
		</div>
	);
}

export default UnknownProduct;