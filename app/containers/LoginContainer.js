import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class SignupScreen extends Component {
	render() {
		return null;
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
