import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Signup from '../components/SignupLogin/Signup';
import HomeContainer from './HomeContainer';

class SignupScreen extends Component {
	render() {
		if (this.props.userData) {
			return <HomeContainer />;
		}

		return <Signup />;
	}
}

SignupScreen.propTypes = {
  userData: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
	return {
		userData: state.userData,
	};
}

export default connect(mapStateToProps)(SignupScreen);
