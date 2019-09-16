import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { lazyReducerEnhancer } from 'pwa-helpers/lazy-reducer-enhancer.js';
const devCompose = typeof window !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;
import app from './redux/app/reducer';
import home from './redux/home/reducer';
export const store = createStore(
	state => state,
	devCompose(
		lazyReducerEnhancer(combineReducers),
		applyMiddleware(thunk))
);

store.addReducers({
	app,
	home
});

export default store;