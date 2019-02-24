import React from 'react';
import ShowcaseImage from './ShowcaseImage/ShowcaseImage';
import HomeSection from './HomeSection/HomeSection';
import './Home.css';

const Home = () => {
	return(
		<div className='Home'>
			<ShowcaseImage />
			<HomeSection />
		</div>
	);
}

export default Home;