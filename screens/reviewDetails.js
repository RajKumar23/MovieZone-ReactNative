import React from 'react';
import { Button, Text, View, Image, StyleSheet } from 'react-native';
import { globalStyles, images } from "../styles/global";
import Card from '../shared/card';

export default function ReviewDetails({ navigation }) {

    const rating = navigation.getParam("rating")

    const pressHandler = () => {
        navigation.goBack()
    }

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.titleText}>Title: {navigation.getParam("title")}</Text>
                <Text style={globalStyles.titleText}>Describtion: {navigation.getParam("description")}</Text>
                {/* <Image style={styles.image} width={90} height={90} source={{ uri: 'https://reactjs.org/logo-og.png' }} /> */}
                <View style={styles.rating}>
                    <Text style={globalStyles.titleText}>Rating </Text>
                    <Image style={styles.image} source={images.ratings[rating]} />
                </View>
            </Card>
            <Button title="Back" onPress={pressHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        flex:1,
        flexDirection: 'row',
        borderTopWidth: 3,
        borderTopColor: "#eee",
        justifyContent: "center",
        paddingTop:16,
        marginTop:16
    },
    image: {
        width: 30,
        height: 30,
        alignContent:"center",
        resizeMode: 'contain'
    }
})