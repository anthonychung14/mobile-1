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
                        <UserInput
                            name="abstract"
                            label="Abstract"
                            placeholder="One sentence"
                        />
                        <Input
                            name="summary"
                            label="Summary"
                            placeholder="Long form"
                        />
                        <Input
                            name="quotation"
                            label="Quotation"
                            placeholder="Copy pasta"
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
})(IngestForm)

const styles = StyleSheet.create({
    formContainer: {
        margin: '10%'
    },
});