import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { ref, remove, update } from 'firebase/database'
import { db } from '../firebase/Config'

export default function Screens3() {
    const [producto, setproducto] = useState("")
    const [marca, setmarca] = useState("")
    const [fabricacion, setfabricacion] = useState("")
    const [precio, setprecio] = useState(0)
    const [codigo, setcodigo] = useState("")

    function editar() {
        update(ref(db, 'productos/' + codigo), {
            nombre: producto,
            marca: marca,
            fabricacion: fabricacion,
            precio: precio
        }).then(() => {
            Alert.alert("Aviso", "Datos editados correctamente");
        });
    }

    function eliminar() {
        remove(ref(db, 'productos/' + codigo))
            .then(() => {
                Alert.alert("Éxito", "Producto eliminado correctamente");
                setcodigo("");
            });
    }

    function confEliminar() {
        if (codigo.trim() === "") {
            Alert.alert("Alerta", "Ingrese el código");
            return;
        }
        Alert.alert(
            "Confirmar Eliminación",
            `¿Estás seguro de que deseas eliminar el producto con código: ${codigo}?`,
            [
                {
                    text: "Cancelar",
                    style: "cancel",
                },
                {
                    text: "OK",
                    onPress: () => eliminar()
                }
            ]
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Editar o Eliminar Productos</Text>

            <Text style={styles.label}>Ingrese el Código del Producto</Text>
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

            <Text style={styles.label}>Ingrese el año de Fabricación</Text>
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

            <Button title='Guardar Cambios' onPress={editar} />

            <Text style={styles.label}>Eliminar por Código</Text>
            <TextInput
                placeholder='Ingresar el Código'
                onChangeText={(texto) => setcodigo(texto)}
                value={codigo}
                style={styles.deleteInput}
            />
            <Button title='Eliminar' onPress={confEliminar} />
        </View>
    )
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
        color: '#333'
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        marginTop: 10,
        marginBottom: 5,
        color: '#555'
    },
    deleteInput: {
        fontSize: 18,
        marginVertical: 10
    }
});
