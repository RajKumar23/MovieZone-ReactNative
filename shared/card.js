import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card(probs) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {probs.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: "#fff",
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginVertical: 6,
        marginHorizontal: 4
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10
    }
})