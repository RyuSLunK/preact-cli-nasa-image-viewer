import { createSelector } from 'reselect';

const getData = (state) => state.nasa ? state.nasa.data : null;

export const makeGetHits = createSelector([getData], (data) => data ? data.collection.metadata.total_hits : 0);
export const makeGetList = createSelector([getData], (data) => data ? data.collection.items.map((item) => ({
	src: item.links[0].href,
	title: item.data[0].title,
	desc: item.data[0].description,
	id: item.data[0].nasa_id
})) : []);