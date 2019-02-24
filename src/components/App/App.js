import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import Home from '../Home/Home';
import Products from '../Products/Products';
import SummaryPage from '../SummaryPage/SummaryPage';
import About from '../About/About';
import Footer from '../Footer/Footer';

import {
	HOME,	PRODUCTS,	ABOUT, SUMMARY
} from '../../redux/constants';

const mapStateToProps = (state) => {
	return {
		route: state.setRoute.route
	};
}

class App extends Component {

	renderRouteComponent = () => {
		const { route } = this.props;

		switch(route) {
			case ABOUT:
				return <About />;
			case PRODUCTS:
				return <Products />;
			case SUMMARY:
				return <SummaryPage />;
			case HOME:
			default:
				return <Home />;
		}
	}

  render() {
  	const { route } = this.props;
  	
    return (
      <div className="App">
        <Navigation />
        {this.renderRouteComponent()}
        <Footer route={route}/>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);