import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { onValue, ref } from 'firebase/database';
import { db } from '../firebase/Config';
import { FlatList } from 'react-native-gesture-handler';

export default function Screen2() {
    const [datos, setdatos] = useState([]);

    function leer() {
        const starCountRef = ref(db, 'productos/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            setdatos(data ? Object.values(data) : []);
        });
    }

    useEffect(() => {
        leer();
    }, []);

    type Product = {
        nombre: string;
        marca: string;
        precio: number;
        fabricacion: string;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Productos</Text>
            <FlatList
                data={datos}
                renderItem={({ item }: { item: Product }) => (
                    <View style={styles.itemContainer}>
                        <TouchableOpacity onPress={() => {
                            Alert.alert(
                                "Más Información",
                                `Nombre: ${item.nombre}\n 
                                Marca: ${item.marca}\n 
                                Precio: $${item.precio}\n 
                                Fabricación: ${item.fabricacion}`
                            );
                        }}>
                            <Text style={styles.itemText}> {item.nombre}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        flex: 1
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    itemContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    itemText: {
        fontSize: 18,
        color: '#444',
        fontWeight: '500'
    }
});
