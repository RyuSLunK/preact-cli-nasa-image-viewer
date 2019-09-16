export const UPDATE_PAGE = 'UPDATE_PAGE';
export const UPDATE_OFFLINE = 'UPDATE_OFFLINE';
export const OPEN_SNACKBAR = 'OPEN_SNACKBAR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';

export const navigate = (path) => (dispatch) => {
	// Extract the page name from path.
	const page = path === '/' ? 'view1' : path.slice(1);

	// Any other info you might want to extract from the path (like page type),
	// you can do here
	dispatch(loadPage(page));
};

const loadPage = (page) => (dispatch) => {
	switch (page) {
		case 'view1':
      import('../components/views/my-view1.js').then((module) => {

      });
			break;
		case 'view2':
      import('../components/views/my-view2.js');
			break;
		case 'view3':
      import('../components/views/my-view3.js');
			break;
		case 'clicker':
      import('../components/views/my-view5');
			break;
		case 'nasa':
      import('../components/views/nasa');
			break;
		default:
			page = 'view404';
      import('../components/views/my-view404.js');
	}

	dispatch(updatePage(page));
};

const updatePage = (page) => ({
	type: UPDATE_PAGE,
	page
});

let snackbarTimer;

export const showSnackbar = () => (dispatch) => {
	dispatch({
		type: OPEN_SNACKBAR
	});
	window.clearTimeout(snackbarTimer);
	snackbarTimer = window.setTimeout(() =>
		dispatch({ type: CLOSE_SNACKBAR }), 3000);
};

export const updateOffline = (offline) => (dispatch, getState) => {
	// Show the snackbar only if offline status changes.
	if (offline !== getState().app.offline) {
		dispatch(showSnackbar());
	}
	dispatch({
		type: UPDATE_OFFLINE,
		offline
	});
};

export const updateLayout = (wide) => (dispatch, getState) => {
	console.log(`The window changed to a ${wide ? 'wide' : 'narrow'} layout`);
};
