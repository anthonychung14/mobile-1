import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { reduxForm } from 'redux-form'

const submit = values => {
  console.log('submitting form', values)
}

const Ingest = props => {
  const { handleSubmit } = props

  return (
    <View style={styles.container}>
      <Text>Email:</Text>
      <TextInput style={styles.input} />
      <TouchableOpacity onPress={handleSubmit(submit)}>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default reduxForm({
  form: 'test'
})(Ingest)

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

  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 37,
    width: 250
  }
})