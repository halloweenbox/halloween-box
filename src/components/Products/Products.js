import React, { Component } from 'react';
import { connect } from 'react-redux';
import UnknownProduct from './UnknownProduct/UnknownProduct';
import dpthStory from '../../products/images/dpthStory.png';
import './Products.css';

import {
	setImage, setTitle, setType, setSummary,
	setKeywords, changeRoute
} from '../../redux/actions';

import {
	DPTH_STORY, SUMMARY
} from '../../redux/constants';

import {
	stories, games
} from '../../products/products';

/*******************************************/


const mapStateToProps = (state) => {
	return {
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSetImage: (image) => {
			dispatch(setImage(image));
		},
		onSetTitle: (title) => {
			dispatch(setTitle(title));
		},
		onSetType: (type) => {
			dispatch(setType(type));
		},
		onSetSummary: (summary) => {
			dispatch(setSummary(summary));
		},
		onSetKeywords: (keywords) => {
			dispatch(setKeywords(keywords));
		},
		onRouteChange: (route) => {
			dispatch(changeRoute(route));
		}
	};
}

class Products extends Component {
	onSelectProduct = (product) => {
		const {
			onSetImage, onSetTitle, onSetType, 
			onSetSummary, onSetKeywords,
			onRouteChange
		} = this.props;

		switch(product) {
			case DPTH_STORY:
				onSetImage(stories[0].image);
				onSetTitle(stories[0].title);
				onSetType(stories[0].type);
				onSetSummary(stories[0].summary);
				onSetKeywords(stories[0].keywords);
				onRouteChange(SUMMARY);
				window.scrollTo(0, 0);
				break;
			default:
				break;
		}
	}

	render() {
		return(
			<div className='Products'>
				<div className='rounded-section'>
					<h4 className='heading dark-heading'>
						{'Stories'}
					</h4>
					<div className='product-container'>
						<img
							className='product'
							src={dpthStory}
							onClick={
								() => this.onSelectProduct(DPTH_STORY)
							}
						/>
						<UnknownProduct />
					</div>
				</div>
				<div className='rounded-section'>
					<h4 className='heading dark-heading'>
						{'Visual Novels'}
					</h4>
					<div className='product-container'>
						<UnknownProduct />
					</div>
				</div>
			</div>
		);
	}
}

export default connect(
	mapStateToProps, mapDispatchToProps
)(Products);