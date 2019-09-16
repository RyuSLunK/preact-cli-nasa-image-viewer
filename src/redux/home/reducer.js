import {
	REQUEST_ITEMS,
	RECEIVE_ITEMS, FAIL_ITEMS
} from './types';

const INITIAL_STATE = {
	search: '',
	loading: false,
	data: null,
	error: null
};

const home = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case REQUEST_ITEMS:
			return {
				loading: true,
				error: null,
				hits: 0
			};
		case RECEIVE_ITEMS: {
			let result = {
				loading: false,
				error: null
			};
			result[action.payload.mediaType] = action.payload.data;
			return result;
		}
		case FAIL_ITEMS:
			return {
				loading: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default home;
