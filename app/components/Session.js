import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import {
    Button
} from 'react-native-clean-form';

import DigestContainer from '../containers/DigestContainer';

export default class Session extends React.Component {
    props: Props;

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    static renderNavigationBar(props) {
        const NavBar = props.NavBar
        return (
            <NavBar />
        );
    }

    render() {
        const { createSession } = this.props;
        return (
            <View style={ styles.container } >
                <Button
                    icon="pencil"
                    iconPlacement="center"
                    onPress={ createSession }
                >
                Submit
                </Button>
                <DigestContainer style={ styles.deck }/>
                <Button
                    icon="open-book"
                    iconPlacement="center"
                    onPress={ createSession }
                >
                Submit
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: 'black',
    },

});