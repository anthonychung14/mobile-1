//@flow
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Ingest from './Ingest';

type Props = {
  increment: Function,
  interval: Function,
  count: number,
};

export default class Home extends React.Component {
	props: Props;

	state = {
		count: 0
	}

	inc = (e) => {
		const nextState = { count: this.state.count + 1 };
		this.setState(nextState);
	}

	interval = (e) => {
		console.log('------- INTERVAL START ------ ')
		this.props.interval();
	}

	render() {
		const { inc, interval } = this;
		const { increment } = this.props;
		return (
		  <View style={styles.container}>
			<Text>Shake your what to open the developer menu.</Text>
			<Text>Number: { this.state.count }</Text>
			<Button
			  onPress={ increment }
			  title="Stop Interval"
			  color="#841584"
			/>
			<Button
			  onPress={ interval }
			  title="Start Interval"
			  color="#841584"
			/>
			<Ingest />
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
