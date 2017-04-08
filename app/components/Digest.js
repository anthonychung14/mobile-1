import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default class Digest extends React.Component {

	props: Props;

	static renderNavigationBar(props) {
		const NavBar = props.NavBar
		return (
			<NavBar />
		);
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>DIGEST STUB</Text>
				<TouchableOpacity>
					<Text style={styles.button}>Submit</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

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
})
