import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Navigation.css';

import {
 changeRoute
} from '../../redux/actions';

import {
	HOME, PRODUCTS,	ABOUT
} from '../../redux/constants';

const mapStateToProps = (state) => {
	return {};
}

const mapDispatchToProps = (dispatch) => {
	return {
		onRouteChange: (route) => {
			dispatch(changeRoute(route));
		}
	};
}

class Navigation extends Component {
	selectRoute = (route) => {
		const { onRouteChange } = this.props;
		onRouteChange(route);
		window.scrollTo(0, 0);
	}

	render() {
		return(
			<nav className='Navigation'>
				<ul className='major-nav-list'>
					<li 
						className='nav-header list-item'
						onClick={() => this.selectRoute(HOME)}
						>{'Halloween Box'}
					</li>
					<li>
						<ul className='minor-nav-list'>
							<li 
								className='list-item'
								onClick={() => this.selectRoute(PRODUCTS)}
								>{'Stories'}
							</li>
							<li 
								className='list-item'
								onClick={() => this.selectRoute(ABOUT)}
								>{'About'}
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		);
	}
}

export default connect(
	mapStateToProps, mapDispatchToProps
)(Navigation);