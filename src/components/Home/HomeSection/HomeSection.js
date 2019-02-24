import React from 'react';
import './HomeSection.css';
import wattpad from './wattpad.png';
import inkitt from './inkitt.png';
import ao3 from './ao3.png';

const HomeSection = () => {
	return(
		<section className='HomeSection'>
			<h4 className='heading bright-heading'>
				{`You can find my stories on:`}
			</h4>
			<div className='link-container'>
				<div 
					className='link-button'
					onClick={() => window.open(
						'https://www.wattpad.com/user/HalloweenBox',
						'_blank'
					)}>
					<img className='link-image'
						src={wattpad}
						alt='wattpad'
					/>
				</div>
				<div 
					className='link-button'
					onClick={() => window.open(
						'http://inkitt.com/HalloweenBox',
						'_blank'
					)}>
					<img className='link-image'
						src={inkitt}
						alt='inkitt'
					/>
				</div>
				<div 
					className='link-button'
					onClick={() => window.open(
						'https://archiveofourown.org/users/HalloweenBox/profile',
						'_blank'
					)}>
					<img className='link-image'
						src={ao3}
						alt='ao3'
					/>
				</div>
			</div>
		</section>
	);
}

export default HomeSection;