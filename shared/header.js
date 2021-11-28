import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { Dimensions } from 'react-native';


export default function Header({ navigation, title }) {
    return (
        <View style={styles.header}>
            <MaterialIcons name="menu" size={28} style={styles.icon} onPress={() => { navigation.openDrawer() }} />
            <View>
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
        color: "#ffffff",
        letterSpacing: "1"
    },
    icon: {
        position: "absolute",
        left: 16,
        color: "#ffffff"
    }
})