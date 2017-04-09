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
  increment: Function,
  interval: Function,
  count: number,
};

export default class Home extends React.Component {
	props: Props;

	static renderNavigationBar(props) {
		const NavBar = props.NavBar
		return (
			<NavBar />
		);
	}

	state = {
		count: 0
	}

	inc = (e) => {
		const nextState = { count: this.state.count + 1 };
		this.setState(nextState);
		this.props.increment();
	}

	interval = (e) => {
		console.log('------- INTERVAL START ------ ')
		this.props.interval();
	}


	navToIngest = () => Actions.pageTwo({ text: 'To page two' })

	render() {
		const { inc, interval, addItem } = this;
		const { increment } = this.props;
		return (
			<View style={styles.container}>
				<Button
					onPress={ interval }
					title="Start Interval"
					color="#841584"
				/>
				<Button
					onPress={ increment }
					title="Stop Interval"
					color="#841584"
				/>
				<Button
					onPress={ addItem }
					title="Add Item Stream"
					color="blue"
				/>
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
