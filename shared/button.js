import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default function CustomButton({ title, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{title}</Text>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: "#f01d71",
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        padding: 10,
    },
    buttonText: {
        fontWeight: "bold",
        textAlign: "center",
        color: "#fff"
    },
})