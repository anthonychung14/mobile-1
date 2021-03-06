import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { reduxForm } from 'redux-form'

import IngestForm from './forms/IngestForm';

export default class Ingest extends React.Component {
	props: Props;

	static renderNavigationBar(props) {
		const NavBar = props.NavBar
		return (
			<NavBar />
		);
	}

	addData = () => {
		console.log('--------- ADD ITEM START --------');
		this.props.addData();
	}

	render() {
		const { addData } = this.props;
		return (
			<View style={ styles.container }>
				<Text style={ styles.header }>
					Create Card
				</Text>
				<IngestForm
					addData={ addData }
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	header: {
		fontSize: 25,
		textAlign: 'center',
	},
	container: {
		flex: 1,
		justifyContent: 'space-around',
		flexDirection: 'column',
		marginTop: '10%',
		backgroundColor: '#fff',
	},
});
