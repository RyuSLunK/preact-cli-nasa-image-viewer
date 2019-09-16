import { h, Component } from 'preact';
import store from '../../store';
import home from '../../redux/home/reducer';
import { connect } from 'preact-redux';
import { loadSome } from '../../redux/home/actions';
import { makeGetImages, makeGetAudios } from '../../redux/home/selectors';

store.addReducers(
	home
);

class Home extends Component{
	state = {
		loading: false
	}
	componentDidMount(){
		this.props.loadSome();
	}
	render(){
		return (<div class="container-fluid p-1">
			<h1>Home</h1>
			<section>
				<h2>Random Images</h2>
			</section>
			<section>
				<h2>Random Audio</h2>
			</section>
			<section>
				<h2>Random Video</h2>
			</section>
		</div>);
	}
}
	
const mapStateToProps = (state) => ({
	images: makeGetImages(state),
	audios: makeGetAudios(state),
	videos: makeGetAudios(state),
	loading: state.home.loading
});

const mapDispatchToProps = {
	loadSome
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
