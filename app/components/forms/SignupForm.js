import React from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import { reduxForm } from 'redux-form/immutable';

import {
    ActionsContainer,
    Button,
    FieldsContainer,
    Fieldset,
    Form,
    FormGroup,
    Label,
} from 'react-native-clean-form'

import {
    Input,
    Select,
    Switch
} from 'react-native-clean-form/redux-form-immutable'

import {
    sourceOptions,
    subjectOptions
} from '../../constants/formOptions';

import UserInput from '../SignupLogin/UserInput';

import usernameImg from '../../icons/username.png';
import passwordImg from '../../icons/password.png';

class SignupForm extends React.Component {
    props: Props;

    onSubmit = values => {
        console.log('submitting form', values.toJS())
        this.props.addItem()
    }

    render() {
        const { onSubmit } = this;
        const { handleSubmit, submitting, change } = this.props;
        return (
            <Form>
                <FieldsContainer>
                    <Fieldset label="Data">
                        <Input
                            name="email"
                            label="Email"
                            placeholder="anthonychung14@gmail.com"
                        />
                        <Input
                            name="password"
                            label="Password"
                            secureTextEntry={ true }
                            placeholder="Your password here"
                        />
                    </Fieldset>
                </FieldsContainer>
                <ActionsContainer>
                    <Button
                        icon="md-checkmark"
                        iconPlacement="right"
                        onPress={ handleSubmit(onSubmit) }
                        submitting={ submitting }
                    >
                        Submit
                    </Button>
                </ActionsContainer>

            </Form>
        )
    }
}

export default reduxForm({
  form: 'signup'
})(SignupForm)

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        alignItems: 'center',
        margin: '10%'
    },
});