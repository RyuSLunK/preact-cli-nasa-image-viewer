import { h } from 'preact';
export const List = (props) => (
	<div class="images">
		{props.list.map(item => (
			<div class="image">
				<h2>{item.title}</h2>
				<p>{item.desc}</p>
				<img src={item.src} />
			</div>
		))}
	</div>
);