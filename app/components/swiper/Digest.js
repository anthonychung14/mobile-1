import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';

import {
	Button
} from 'react-native-clean-form';

import SwipeCards from './SwipeCards';
import styles from './styles';

let Card = React.createClass({
  render() {
	return (
	  <View style={styles.card}>
		<Image style={styles.thumbnail} source={{uri: this.props.image}} />
		<Text style={styles.text}>This is your card {this.props.name}</Text>
		<Text style={styles.text}>This is card {this.props.name}</Text>
	  </View>
	)
  }
})

let NoMoreCards = React.createClass({
  render() {
	return (
	  <View style={styles.noMoreCards}>
		<Text>No more cards</Text>
	  </View>
	)
  }
})

export default class Digest extends React.Component {
	props: Props;

	constructor(props) {
		super(props);
		this.state = {
			outofCards: false
		}
	}

	static renderNavigationBar(props) {
		const NavBar = props.NavBar
		return (
			<NavBar />
		);
	}

	handleSwipeRight = (card) => {
		console.log("right", card)
	}

	handleSwipeLeft = (card) => {
		console.log("left", card)
	}

  	handleSwipeUp = (card) => {
		console.log("up", card)
  	}

  	// handleSwipeDown = (card) => {
	  // 	console.log("down", card);
  	// }

	cardRemoved = (index) => {
		console.log(`The index is ${index}`);

		let CARD_REFRESH_LIMIT = 3

		if (this.props.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
		  console.log(`There are only ${this.props.cards.length - index - 1} cards left.`);

			if (!this.state.outOfCards) {
				console.log('out of cards')

				// this.setState({
			 //  		cards: this.props.cards.concat(Cards2),
			 //  		outOfCards: true
				// })
			}
		}
	}

	render() {
		const { createSession } = this.props;
		return (
			<View style={ styles.container } >
					<SwipeCards
						style={ styles.stack }
						cards={ this.props.cards.toJS() }
						loop={ false }
						renderCard={ (cardData) => <Card { ...cardData} /> }
						renderNoMoreCards={ () => <NoMoreCards /> }
						showRightSwipe={ true }
						showLeftSwipe={ true }
						showDownSwipe={ true }
						showUpSwipe={ true }

						handleSwipeRight={ this.handleSwipeRight }
						handleSwipeLeft={ this.handleSwipeLeft }
						handleSwipeDown={ this.handleSwipeDown }
						handleSwipeUp={ this.handleSwipeUp }

						cardRemoved={ this.cardRemoved }
					/>
			</View>
		)
	}
}

