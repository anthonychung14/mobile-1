import React from 'react';
import styles from './styles'

const Card = React.createClass({
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

export default Card;