import react, { Component } from 'react';
import '../scss/main.scss';

class Page extends Component {
	render() {
		return (
			<div className="test">
				<div className="starter text-center">
					<h1>Bootstrap starter template</h1>
					<p className="lead">
						Use this document as a way to quickly start any new project.
						<br /> All you get is this text and a mostly barebones HTML
						document.
					</p>
				</div>
			</div>
		);
	}
}

export default Page;
