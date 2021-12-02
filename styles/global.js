import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    titleText: {
        fontFamily: "regular",
        fontSize: 20,
        color: "#333"
    },
    listTitle: {
        fontFamily: "regular",
        fontSize: 15,
        color: "#333",
        margin: 10,
        padding: 10,
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20
    },
    textBoxStyle: {
        borderWidth: 2,
        borderColor: '#bbb',
        borderRadius: 5,
        padding: 5,
        marginBottom: 5,
        // width: 200
    },
    textViewError: {
        color:"crimson",
        marginBottom: 10,
        fontWeight: "bold",
        textAlign: "center"
    },
});

export const images = {
    ratings: {
        1: require('../assets/rating-1.png'),
        2: require('../assets/rating-2.png'),
        3: require('../assets/rating-3.png'),
        4: require('../assets/rating-4.png'),
        5: require('../assets/rating-5.png'),
    }
}