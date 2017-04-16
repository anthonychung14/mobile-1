//@flow
import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
	TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';

type Props = {
  addData: Function,
  count: number,
};

export default class AddDataView extends React.Component {
	props: Props;

	static renderNavigationBar(props) {
		const NavBar = props.NavBar
		return (
			<NavBar />
		);
	}

	render() {
		const { addData } = this.props;

		return (
			<View style={styles.container}>
				<Button
					onPress={ addData }
					title="Add Item Stream"
					color="blue"
				/>
				<TouchableOpacity
					onPress={ addData }
					title="Another Style"
					color="blue"
				>
                    <Text>Submit</Text>
                </TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
	backgroundColor: '#fff',
	alignItems: 'center',
	justifyContent: 'center',
  },
});
