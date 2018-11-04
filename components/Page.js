import React, { Component, Fragment } from 'react';
import Meta from './Meta';

class Page extends Component {
	render() {
		return (
			<Fragment>
				<Meta />
				{this.props.children}
			</Fragment>
		);
	}
}

export default Page;
