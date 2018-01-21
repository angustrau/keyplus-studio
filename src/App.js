import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import the start/loading screen component
import Start from 'containers/panels/Start';

// Mapping of locations to panels
const routes = {
	'start': Start	
}

const mapStateToProps = (state) => ({
	location: state.app.location // The routed location
})

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { location } = this.props;
		const VisiblePanel = routes[location];

		return (
			<VisiblePanel />
		);
	}
}

export default connect(mapStateToProps)(App);
