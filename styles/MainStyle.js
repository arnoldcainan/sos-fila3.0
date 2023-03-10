import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#47B5BE',
        alignItems: 'center',
        justifyContent: 'center',
        color: "#red",


    },
    inputView: {
        width: "80%",
        backgroundColor: "#6cc4cb",
        borderRadius: 25,
        height: 60,
        margin: 10,
        justifyContent: "center",
        padding: 15
    },
    text: {
        color: '#FFF',
    },
    button: {
        backgroundColor: 'black',
    },
});
export default styles