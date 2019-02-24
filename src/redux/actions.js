import { 
	CHANGE_ROUTE, SET_IMAGE, SET_TITLE,
	SET_TYPE, SET_SUMMARY, SET_KEYWORDS,
	CLEAR_ACTION_BOX
} from './constants.js';


export const changeRoute = (route) => {
	return {
		type: CHANGE_ROUTE,
		payload: route
	}
}

export const setImage = (image) => {
	return {
		type: SET_IMAGE,
		payload: image
	}
}

export const setTitle = (title) => {
	return {
		type: SET_TITLE,
		payload: title
	}
}

export const setType = (type) => {
	return {
		type: SET_TYPE,
		payload: type
	}
}

export const setSummary = (summary) => {
	return {
		type: SET_SUMMARY,
		payload: summary
	}
}

export const setKeywords = (keywords) => {
	return {
		type: SET_KEYWORDS,
		payload: keywords
	}
}