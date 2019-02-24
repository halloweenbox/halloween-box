import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SummaryPage.css';

import {
	OPEN_PDTH_STORY
} from '../../redux/constants';

const mapStateToProps = (state) => {
	return {
		image: state.setProduct.image,
		title: state.setProduct.title,
		type: state.setProduct.type,
		summary: state.setProduct.summary,
		keywords: state.setProduct.keywords
	}
}

class SummaryPage extends Component {

	render() {
		const {
			image, title, type, summary, keywords
		} = this.props;

		return (
			<div id='SummaryPage'>
				<div className='product-container'>
					<p
						className='heading bright-heading'>
						{`${title}`}
					</p>
					<div className='product-body'>
						<div className='product-image'>
							<img
								src={image}
								alt={'image'}
							/>
						</div>
						<p className='product-summary'>
							{summary}
						</p>
						<p className='product-keywords'>
							{`Keywords: ${keywords}`}
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(
	mapStateToProps
)(SummaryPage);