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

const Cards = [
  {name: '1', image: 'https://media.giphy.com/media/GfXFVHUzjlbOg/giphy.gif'},
  {name: '2', image: 'https://media.giphy.com/media/irTuv1L1T34TC/giphy.gif'},
  {name: '3', image: 'https://media.giphy.com/media/LkLL0HJerdXMI/giphy.gif'},
  {name: '4', image: 'https://media.giphy.com/media/fFBmUMzFL5zRS/giphy.gif'},
  {name: '5', image: 'https://media.giphy.com/media/oDLDbBgf0dkis/giphy.gif'},
  {name: '6', image: 'https://media.giphy.com/media/7r4g8V2UkBUcw/giphy.gif'},
  {name: '7', image: 'https://media.giphy.com/media/K6Q7ZCdLy8pCE/giphy.gif'},
  {name: '8', image: 'https://media.giphy.com/media/hEwST9KM0UGti/giphy.gif'},
  {name: '9', image: 'https://media.giphy.com/media/3oEduJbDtIuA2VrtS0/giphy.gif'},
]

const Cards2 = [
  {name: '10', image: 'https://media.giphy.com/media/12b3E4U9aSndxC/giphy.gif'},
  {name: '11', image: 'https://media4.giphy.com/media/6csVEPEmHWhWg/200.gif'},
  {name: '12', image: 'https://media4.giphy.com/media/AA69fOAMCPa4o/200.gif'},
  {name: '13', image: 'https://media.giphy.com/media/OVHFny0I7njuU/giphy.gif'},
]

export default class Digest extends React.Component {
	props: Props;

	constructor(props) {
		super(props);
		this.state = {
			cards: Cards,
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

  handleSwipeDown = (card) => {
      console.log("down", card);
  }

	cardRemoved = (index) => {
		console.log(`The index is ${index}`);

		let CARD_REFRESH_LIMIT = 3

		if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
		  console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);

			if (!this.state.outOfCards) {
				console.log(`Adding ${Cards2.length} more cards`)

				this.setState({
			  		cards: this.state.cards.concat(Cards2),
			  		outOfCards: true
				})
			}
		}
	}

	render() {
	    const { createSession } = this.props;
        return (
            <View style={ styles.container } >
                    <SwipeCards
                        style={ styles.stack }
                        cards={this.state.cards}
                        loop={false}
                        renderCard={(cardData) => <Card {...cardData} />}
                        renderNoMoreCards={() => <NoMoreCards />}
                        showRightSwipe={true}
                        showLeftSwipe={true}
                        showDownSwipe={true}
                        showUpSwipe={true}

                        handleSwipeRight={this.handleSwipeRight}
                        handleSwipeLeft={this.handleSwipeLeft}
                        handleSwipeDown={this.handleSwipeDown}
                        handleSwipeUp={this.handleSwipeUp}

                        cardRemoved={this.cardRemoved}
                    />
            </View>
		)
	}
}

