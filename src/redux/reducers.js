import { 
	CHANGE_ROUTE, HOME, SET_IMAGE, SET_TITLE,
	SET_TYPE, SET_SUMMARY, SET_KEYWORDS
} from './constants.js';

/*******************************************/

const initialRouteState = {
	route: HOME
}

export const setRoute = 
(state=initialRouteState, action={}) => {

	switch(action.type) {
		case CHANGE_ROUTE:
			return Object.assign({}, state, {
				route: action.payload
			});
		default:
			return state;
	}
}

/*******************************************/

const initialProductState = {
	image: '',
	title: '',
	type: '',
	summary: '',
	keywords: ''
};

export const setProduct = 
(state=initialProductState, action={}) => {

	switch(action.type) {
		case SET_IMAGE:
			return Object.assign({}, state, {
				image: action.payload
			});
		case SET_TITLE:
			return Object.assign({}, state, {
				title: action.payload
			});
		case SET_TYPE:
			return Object.assign({}, state, {
				type: action.payload
			});
		case SET_SUMMARY:
			return Object.assign({}, state, {
				summary: action.payload
			});
		case SET_KEYWORDS:
			return Object.assign({}, state, {
				keywords: action.payload
			});
		default:
			return state;
	}
};