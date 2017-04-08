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

export default class Ingest extends React.Component {
	props: Props;

	static renderNavigationBar(props) {
		const NavBar = props.NavBar
		return (
			<NavBar />
		);
	}

	submit = values => {
		console.log('submitting form', values)
		this.props.increment();
	  	Actions.pageThree({ text: 'To page two' });
	}

	render() {
		const { handleSubmit } = this.props;
		return (
			<View style={styles.container}>
				<Text>Title</Text>
				<TextInput style={styles.input} />
				<TouchableOpacity>
					<Text
						style={styles.button}
						onPress={ this.submit }>
							Submit
					</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

// export default reduxForm({
//   form: 'test'
// })(Ingest)

const styles = StyleSheet.create({
	button: {
		backgroundColor: 'blue',
		color: 'white',
		height: 30,
		lineHeight: 30,
		marginTop: 10,
		textAlign: 'center',
		width: 250
	  },
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	input: {
		borderColor: 'black',
		borderWidth: 1,
		height: 37,
		width: 250,
		justifyContent: 'center',
		alignItems: 'center'
	}
})
