import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { Dimensions } from 'react-native';


export default function Header({ navigation, title }) {
    return (
        <View style={styles.header}>
            <MaterialIcons name="menu" size={28} style={styles.icon} onPress={() => { navigation.openDrawer() }} />
            <View style={styles.headerStyle}>
                <Image source={require("../assets/heart_logo.png")} style={styles.headerImage} />
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    header: {
        width: Dimensions.get('screen').width,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    headerText: {
        fontWeight: "bold",
        color: "#000000",
        marginStart: 10,
        letterSpacing: 1
    },
    icon: {
        position: "absolute",
        left: 16,
        color: "#000000"
    },
    headerImage: {
        height: 26,
        width: 26
    },
    headerStyle: {
        flexDirection: "row"
    },
})