import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 5
    },
    card: {
        alignItems: 'center',
        borderRadius: 5,
        overflow: 'hidden',
        borderColor: 'black',
        backgroundColor: 'white',
        borderWidth: 1,
        elevation: 1,
    },
    stack: {
        flex: 1,
        width: '100%',
    },
    thumbnail: {
        flex: 1,
        width: '90%',
        height: '70%',
    },
    text: {
        fontSize: 15,
        paddingTop: 10,
        paddingBottom: 10
    },
    noMoreCards: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        flex: 1
    }
});

export default styles;