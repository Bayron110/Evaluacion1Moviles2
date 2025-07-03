import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function Screens4() {
    const [juegos, setJuegos] = useState<Juego[]>([]);

    useEffect(() => {
        fetch('https://jritsqmet.github.io/web-api/video_juegos.json')
            .then((res) => res.json())
            .then((data) => {
                setJuegos(data.videojuegos);
            });
    }, []);

    type Juego = {
        titulo: string;
        desarrollador: string;
        precio: string;
        imagen: string;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Listado de Videojuegos</Text>
            <FlatList
                data={juegos}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Image source={{ uri: item.imagen }} style={styles.imagen} />
                        <Text style={styles.nombre}>Nombre: {item.titulo}</Text>
                        <Text style={styles.info}>Desarrollador: {item.desarrollador}</Text>
                        <Text style={styles.precio}> Precio: ${item.precio}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 40,
        backgroundColor: '#fff',
        flex: 1,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    item: {
        backgroundColor: '#eef3f7',
        padding: 15,
        marginBottom: 15,
        borderRadius: 8,
    },
    imagen: {
        width: 100,
        height: 100,
        marginBottom: 10,
        alignSelf: 'center',
    },
    nombre: {
        fontSize: 18,
        fontWeight: '600',
        color: '#222',
        marginBottom: 4,
    },
    info: {
        fontSize: 16,
        color: '#555',
        marginBottom: 2,
    },
    precio: {
        fontSize: 16,
        color: '#008000',
        fontWeight: 'bold',
    },
});
