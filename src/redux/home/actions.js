import { FAIL_ITEMS, RECEIVE_ITEMS, REQUEST_ITEMS } from './types';

export const loadSome = () => (dispatch) => (
	dispatch(fetchItems())
);

export const fetchItems = () => (dispatch) => {
	dispatch(requestItems());
	fetch(`https://images-api.nasa.gov/search?media_type=image`)
		.then(res => res.json())
		.then(data => dispatch(receiveItems('image',data)))
		.catch(() => dispatch(failItems));
	fetch(`https://images-api.nasa.gov/search?media_type=audio`)
		.then(res => res.json())
		.then(data => dispatch(receiveItems('audio',data)))
		.catch(() => dispatch(failItems));
	fetch(`https://images-api.nasa.gov/search?media_type=video`)
		.then(res => res.json())
		.then(data => dispatch(receiveItems('video',data)))
		.catch(() => dispatch(failItems));
};

export const requestItems = () => ({
	type: REQUEST_ITEMS
});

export const receiveItems = (mediaType, payload) => (
	{
		type: RECEIVE_ITEMS,
		payload: {
			mediaType,
			data: payload
		}
	}
);

export const failItems = (payload) => (
	{
		type: FAIL_ITEMS,
		payload
	}
);