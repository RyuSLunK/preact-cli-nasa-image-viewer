export const REQUEST_ITEMS = 'REQUEST_ITEMS';
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const FAIL_ITEMS = 'FAIL_ITEMS';
export const SEARCH_CHANGED = 'SEARCH_CHANGED';

export const searchChanged = (payload) => (dispatch) => {
	dispatch({
		type: SEARCH_CHANGED,
		payload
	});
	dispatch(fetchItems(payload));
};

export const fetchItems = (payload) => (dispatch) => {
	dispatch(requestItems());
	fetch(`https://images-api.nasa.gov/search?q=${encodeURIComponent(payload)}&media_type=image`)
		.then(res => res.json())
		.then(data => dispatch(receiveItems(data)))
		.catch(() => dispatch(failItems));
};

export const requestItems = () => ({
	type: REQUEST_ITEMS
});

export const receiveItems = (payload) => (
	{
		type: RECEIVE_ITEMS,
		payload
	}
);

export const failItems = (payload) => (
	{
		type: FAIL_ITEMS,
		payload
	}
);