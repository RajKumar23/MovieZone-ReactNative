import React, { useState } from 'react';
import { Text, ImageBackground, FlatList, TouchableOpacity, Modal, StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Card from '../shared/card';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./reviewForms"


export default function Home({ navigation }) {

    const [getShowModal, setShowModal] = useState(false)

    const [getReviews, setReviews] = useState([
        { title: "Red notice", rating: 3, description: "Test content", key: 1 },
        { title: "Free Guy", rating: 5, description: "Test content", key: 2 },
        { title: "Shang-Chi and The Legend of The Ten Rings", rating: 3, description: "Test content", key: 3 },
        { title: "Black Widow", rating: 1, description: "Test content", key: 4 }
    ]);

    const pressHandler = (item) => {
        navigation.navigate("ReviewDetails", item)
        // navigation.push("Review Details")
    };

    const addReview = (reviews) => {
        reviews.key = Math.random()
        setReviews((prevReviews) => {
            return [
                reviews, ...prevReviews
            ]
        })
        setShowModal(false)
    }


    return (
        <ImageBackground source={require("../assets/game_bg.png")} style={globalStyles.container}>
            <TouchableOpacity onPress={() => setShowModal(true)}>
                <View style={styles.addNewModalButtonStyle}>
                    <MaterialIcons
                        name="add"
                        size={24}
                    />
                    <Text>Add New</Text>
                </View>
            </TouchableOpacity>

            <Modal visible={getShowModal} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modelContentStyle}>
                        <MaterialIcons
                            name="close"
                            size={24}
                            style={[styles.modalCloseButton, {
                                marginEnd: 10,
                                marginTop: 20,
                            }]}
                            onPress={() => setShowModal(false)}
                        />
                        <ReviewForm addReview={addReview} setShowModal={setShowModal} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <FlatList
                data={getReviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => pressHandler(item)}>
                        <Card><Text >{item.title}</Text></Card>
                        {/* style={globalStyles.listTitle} */}
                    </TouchableOpacity>
                )}
            />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    addNewModalButtonStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#bbb",
        height: 40,
    },
    modelContentStyle: {
        padding: 20,
        flex: 1,
    },
    modalCloseButton: {
        borderWidth: 3,
        borderColor: "#f2f2f2",
        padding: 5,
        borderRadius: 10,
        marginBottom: 10,
        alignSelf: "flex-end",
    },
})

