import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from "../assets/styles/global";
import Card from '../shared/card';

export default function Home({ navigation }) {

    const [getReviews, setReviews] = useState([
        { title: "Red notice", rating: 3, describtion: "Test content", key: 1 },
        { title: "Free Guy", rating: 5, describtion: "Test content", key: 2 },
        { title: "Shang-Chi and The Legend of The Ten Rings", rating: 3, describtion: "Test content", key: 3 },
        { title: "Black Widow", rating: 0, describtion: "Test content", key: 4 }
    ]);

    const pressHandler = (item) => {
        navigation.navigate("ReviewDetails", item)
        // navigation.push("Review Details")
    };

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={getReviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => pressHandler(item)}>
                        <Card><Text >{item.title}</Text></Card>
                        {/* style={globalStyles.listTitle} */}
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

