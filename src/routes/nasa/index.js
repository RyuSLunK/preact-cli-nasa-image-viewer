import { h } from 'preact';
import style from './style';
import store from '../../store';
import nasa from '../../reducers/nasa';
import { connect } from 'preact-redux';
import { makeGetHits, makeGetList } from '../../selectors/nasa';
import { searchChanged } from '../../actions/nasa';
import { List } from './list';

store.addReducers({
	nasa
});

const Nasa = (props) => (<div class={style.nasa}>
	<h1>Nasa Stuff goes here.</h1>
	<p>This is the user profile for a user named</p>
	<div class="controls">
		<label>Search:<input type="text" onChange={props.searchChanged} /></label>
	</div>
	<List list={props.list} />
</div>);


const mapStateToProps = (state) => ({
	search: '',
	loading: false,
	data: null,
	error: null,
	hits: makeGetHits(state),
	list: makeGetList(state)
});

const mapDispatchToProps = (dispatch) => ({
	searchChanged: (evt) => dispatch(searchChanged(evt.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Nasa);