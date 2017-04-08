import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends React.Component {

    state = {
        count: 0
    }

    inc = (e) => {
        const nextState = { count: this.state.count + 1 };
        this.setState(nextState);
    }

    dec = (e) => {
        const nextState = { count: this.state.count - 1 };
        console.log('this.state', this.state)
        this.setState(nextState);
    }

    render() {
        const { inc, dec } = this;
        return (
          <View style={styles.container}>
            <Text>Shake your what to open the developer menu.</Text>
            <Text>Number: { this.state.count }</Text>
            <Button
              onPress={ inc }
              title="ADD"
              color="#841584"
              accessibilityLabel="BUTTON FOR INCREMENT"
            />
            <Button
              onPress={ dec }
              title="SUBTRACT"
              color="#841584"
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
