import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { ref, set } from 'firebase/database'
import { db } from '../firebase/Config'

export default function Screen1() {
    const [producto, setproducto] = useState("")
    const [marca, setmarca] = useState("")
    const [fabricacion, setfabricacion] = useState("")
    const [precio, setprecio] = useState(0)
    const [codigo, setcodigo] = useState("")

    function guardar() {
        set(ref(db, "productos/" + codigo), {
            codigo: codigo,
            nombre: producto,
            marca: marca,
            fabricacion: fabricacion,
            precio: precio
        }).then(() => {
            setcodigo("");
            setproducto("");
            setmarca("");
            setprecio(0);
            setfabricacion("");
            Alert.alert("Aviso", "Datos guardados");
        });
    }

    return (
        <View style={{ padding: 20 }}>
            <Text style={styles.title}>Guardar Productos</Text>

            <Text style={styles.label}>Ingrese el Codigo del Producto</Text>
            <TextInput
                placeholder='Ej: PXG456'
                onChangeText={(text) => setcodigo(text)}
                value={codigo}
            />

            <Text style={styles.label}>Ingrese el Nombre del Producto</Text>
            <TextInput
                placeholder='Ej: Laptops, Celular'
                onChangeText={(text) => setproducto(text)}
                value={producto}
            />

            <Text style={styles.label}>Ingrese la Marca</Text>
            <TextInput
                placeholder='Ej: Lenovo, Asus, HP, Apple, etc'
                onChangeText={(text) => setmarca(text)}
                value={marca}
            />

            <Text style={styles.label}>Ingrese el año de Fabricacion</Text>
            <TextInput
                placeholder='Ej: 2010, 2015, 2025'
                onChangeText={(text) => setfabricacion(text)}
                value={fabricacion}
            />

            <Text style={styles.label}>Ingrese el Precio</Text>
            <TextInput
                placeholder='$100, $200, $300'
                onChangeText={(text) => setprecio(+text)}
                value={precio ? precio.toString() : ""}
            />

            <Button title='Guardar' onPress={guardar} />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333'
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        marginTop: 10,
        marginBottom: 5,
        color: '#555'
    }
})
