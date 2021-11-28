import React from 'react';
import { Button, Text, View } from 'react-native';
import { globalStyles } from "../assets/styles/global";
import Card from '../shared/card';

export default function ReviewDetails({ navigation }) {

    const pressHandler = () => {
        navigation.goBack()
    }

    return (
        <View style={globalStyles.container}>
            <Card><Text style={globalStyles.titleText}>Title: {navigation.getParam("title")}</Text>
                <Text style={globalStyles.titleText}>Describtion: {navigation.getParam("describtion")}</Text>
                <Text style={globalStyles.titleText}>Rating: {navigation.getParam("rating")}</Text>
                <Button title="Back" onPress={pressHandler} />
            </Card>
        </View>
    )
}