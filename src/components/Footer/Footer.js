import React from 'react';
import happy from './happy.png';
import scary from './scary.png';
import './Footer.css';

import {
	HOME, PRODUCTS, ABOUT, SUMMARY
} from '../../redux/constants';

const Footer = ({ route }) => {

	const renderFooterChildren = () => {
		return (
			<div className='footer-children'>
				<p className='tilde'>~</p>
				<img
					className='footer-img'
					src={happy}
					alt='happy pumpkin'
				/>
				<img 
					className='footer-img'
					src={scary}
					alt='scary pumpkin'
				/>
				<p className='tilde'>~</p>
			</div>
		);
	}

	const renderFooter = () => {
		switch(route) {
			case ABOUT:
				return (
					<footer className='about-footer'>
						{renderFooterChildren()}
					</footer>
				);
			case PRODUCTS:
				return (
					<footer className='products-footer'>
						{renderFooterChildren()}
					</footer>
				);
			case SUMMARY:
				return (
					<footer className='summary-footer'>
						{renderFooterChildren()}
					</footer>
				);
			case HOME:
			default:
				return (
					<footer className='home-footer'>
						{renderFooterChildren()}
					</footer>
				);
		}
	}

	return(
		<div>
			{renderFooter()}
		</div>
	);
}

export default Footer;