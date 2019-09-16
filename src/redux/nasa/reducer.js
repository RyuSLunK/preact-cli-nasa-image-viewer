import {
	REQUEST_ITEMS,
	RECEIVE_ITEMS, FAIL_ITEMS, SEARCH_CHANGED
} from './actions';
  
const INITIAL_STATE = {
	search: '',
	loading: false,
	data: null,
	error: null
};
  
const nasa = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case REQUEST_ITEMS:
			return {
				loading: true,
				error: null,
				hits: 0
			};
		case RECEIVE_ITEMS:
			return {
				loading: false,
				data: action.payload,
				error: null
			};
		case FAIL_ITEMS:
			return {
				loading: false,
				error: action.payload
			};
		case SEARCH_CHANGED:
			return {
				search: action.payload
			};
		default:
			return state;
	}
};
  
export default nasa;
  