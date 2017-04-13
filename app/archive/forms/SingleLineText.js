import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';

const SingleLineText = ({ name, input: { onChange, ...restInput }}) => (
    <View style={ styles.container }>
        <Text>{ name || 'No Title' }</Text>
        <TextInput
            style={ styles.input }
            onChangeText={ onChange }
            { ...restInput }
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        width: 250
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        height: 40,
        margin: 10,
    }
});

export default SingleLineText;