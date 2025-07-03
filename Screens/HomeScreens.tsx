import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function HomeScreens({ navigation }: any) {
    return (
        <ImageBackground
            source={require('../assets/imagenes/imagenHome.jpg')}
            style={styles.img}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <Text style={styles.title}>Bayron Alomoto</Text>

                <TouchableOpacity onPress={() => navigation.navigate("Tabs")}>
                    <Text style={styles.ingresar}>Ingresar</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    img: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
        textAlign: 'center',
    },
    ingresar: {
        fontSize: 18,
        color: '#ffffff',
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        textAlign: 'center',
    },
})
