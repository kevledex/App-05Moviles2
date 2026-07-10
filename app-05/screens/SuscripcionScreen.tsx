import { Alert, Button, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function SuscripcionScreen() {
    const [ocultar, setocultar] = useState(false)
    const [nombre, setnombre] = useState("")
    const [edad, setedad] = useState(0)
    const [numerosHijos, setnumerosHijos] = useState(0)

    useEffect(() => {
        if (isNaN(edad)) {
            setedad(0)
        }
    }, [edad])

    function limpiar() {
        setnombre("")
        setedad(0)
        setnumerosHijos(0)
    }

    function calcularSeguro() {

        let seguroBase = 70;
        let descuentoPorHijo = 0;
        let descuentoPorEdad = 0;

        if (numerosHijos >= 1) {
            descuentoPorHijo = numerosHijos * 7;
        } else {
            descuentoPorHijo = 0;
        }

        if (edad < 20) {
            descuentoPorEdad = seguroBase / 2;
        } else {
            descuentoPorEdad = 0;
        }

        const seguroFinal = seguroBase - (descuentoPorEdad + descuentoPorHijo);


        Alert.alert(
            "RESULTADO",
            nombre + "\nSu seguro es de: " + seguroFinal.toFixed(2)
        )
    }


    return (
        <View style={styles.container}>

            <View style={styles.txtContainer}>
                <Text style={styles.titulo}>FORMULARIO</Text>
            </View>

            <Text style={styles.label}>Nombre:</Text>
            <TextInput
                placeholder='Escriba su nombre'
                style={styles.input}
                onChangeText={setnombre}
                value={nombre}
                placeholderTextColor="#cecece"
            />

            <Text style={styles.label}>Edad:</Text>
            <TextInput
                placeholder='Escriba su edad'
                onChangeText={(texto) => setedad(+texto)}
                value={edad === 0 ? "" : edad.toString()}
                keyboardType='numeric'
                placeholderTextColor="#cecece"
                style={styles.input}
            />

            <View style={styles.switchRow}>
                <Text style={styles.switchText}>¿Usted tiene hijos?</Text>
                <Switch
                    value={ocultar}
                    onValueChange={() => setocultar(!ocultar)}
                />
            </View>

            {
                ocultar ? (
                    <View style={styles.hijosContainer}>
                        <Text style={styles.labelCentrado}>Cantidad de hijos:</Text>
                        <TextInput
                            placeholder='N° hijos'
                            placeholderTextColor="#cecece"
                            keyboardType='numeric'
                            onChangeText={(texto) => setnumerosHijos(+texto)}
                            value={numerosHijos === 0 ? "" : numerosHijos.toString()}
                            style={styles.input}
                        />
                    </View>
                ) : (
                    <Text style={styles.textoNo}>Sin hijos registrados</Text>
                )
            }

            <View style={styles.btnContainer}>
                <Button
                    title='Calcular Seguro'
                    color={"#ffa600"}
                    onPress={calcularSeguro}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#757575',
        alignItems: 'center',
        paddingTop: 60,
    },
    txtContainer: {
        marginBottom: 30,
    },
    titulo: {
        color: '#ffffff',
        fontSize: 35,
        fontWeight: 'bold',
    },
    label: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        width: '80%',
        marginBottom: 5,
        marginTop: 15,
    },
    labelCentrado: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        backgroundColor: "#4e4e4e",
        fontWeight: "bold",
        fontSize: 18,
        width: "80%",
        height: 60,
        borderColor: "#ffffff",
        borderWidth: 2,
        borderRadius: 15,
        paddingHorizontal: 15,
        color: "#ffffff",
    },
    switchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        marginBottom: 10,
        width: '80%',
    },
    switchText: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 15,
    },
    hijosContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
    },
    textoNo: {
        color: "#cecece",
        fontSize: 16,
        marginTop: 15,
        marginBottom: 15,
    },
    btnContainer: {
        marginTop: 40,
        width: '80%',
        borderRadius: 10,
    }
})