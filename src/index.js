import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App/App';
import './index.css';

import {
	setRoute, setProduct
} from './redux/reducers';

const rootReducer = combineReducers({
	setRoute, setProduct
});

const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
