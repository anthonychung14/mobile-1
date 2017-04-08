//@flow
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity
} from 'react-native';

import { Actions } from 'react-native-router-flux';

type Props = {
};

export default class NavBar extends React.Component {
    props: Props;

    navToHome = () => Actions.pageOne({ text: 'To page two' });
    navToIngest = () => Actions.pageTwo({ text: 'To page two' });
    navToDigest = () => Actions.pageThree({ text: 'To page two' });
    navToTest = () => Actions.pageFour({ text: 'To page two' });

    render() {
        const { navToIngest, navToHome, navToDigest, navToTest } = this;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={ navToHome } >
                    <Text style={styles.button}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ navToIngest } >
                    <Text style={styles.button}>Ingest</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ navToDigest } >
                    <Text style={styles.button}>Digest</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ navToTest } >
                    <Text style={styles.button}>Test</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: '10%',
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        padding: '5%',
        margin: '1%'
    }
});
