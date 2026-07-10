import { Alert, Button, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

/*
CREA UN FORMULARIO QUE RECIBA NOMBRE, EDAD,(EL NUMERO HIJOS DE)
SWITCH PREGUNTANDO SI TIENE
    SI TIENE HIJOS APARECE UN CAMPO QUE PEDIRA LA CANTIDAD DE HIJOS

SI ES MENOR DE 20 AÑOS, LA SUSCRIPCIÓN CUESTA LA MITAD
SI TIENE HIJOS SE APLICA UN DESCUENTO DE $7 USD POR CADA HIJO

EL VALOR DE LA SUSCRIPCION DEL SEGURO ES DE $70 USD
CALCULAR EL VALOR DEL SEGURO
*/

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

        let seguroBase = 70
        let descuentoPorHijo = 0
        let descuentoPorEdad = 0


        if (numerosHijos > 1) {
            descuentoPorHijo = numerosHijos * 7
        } else {
            descuentoPorHijo = 0
        }

        if (edad < 20) {
            descuentoPorEdad = seguroBase / 2
        } else {
            descuentoPorEdad = 0
        }

        const seguroFinal = seguroBase - (descuentoPorEdad + descuentoPorHijo)

        Alert.alert(
            "RESULTADO",
            "Nombre: " + nombre + "\nSu seguro es de: " + seguroFinal.toFixed(2)
        )
    }


    return (
        <View style={styles.container}>
            <View style={styles.txtContainer}>
                <Text style={styles.titulo}>FORMULARIO</Text>
            </View>

            <TextInput
                placeholder='Nombre'
                style={styles.input}
                onChangeText={setnombre}
                value={nombre}
                placeholderTextColor="#cecece"
            />

            <TextInput
                placeholder='Edad'
                onChangeText={(texto) => setedad(+texto)}
                value={edad.toString()}
                keyboardType='numeric'
                placeholderTextColor="#cecece"
                style={styles.input}
            />

            <View style={{ flex: 1 }}>
                <Text style={{ color: "#ffffff" }}>Usted tiene hijos?      </Text>

                <View style={{ alignContent: 'center' }}>

                    <Switch
                        value={ocultar}
                        onChange={() => setocultar(!ocultar)}
                    />
                    {
                        ocultar == true
                            ? <TextInput
                                placeholder='N° hijos'
                                placeholderTextColor="#cecece"
                                keyboardType='numeric'
                                onChangeText={(texto) => setnumerosHijos(+texto)}
                                value={numerosHijos.toString()}
                                style={styles.input} />
                            : <Text>NO</Text>
                    }
                </View>
                <Button
                    title='Calcular'
                    color={"#ffa600"}
                    onPress={calcularSeguro} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: '#757575',
        flex: 1,
        alignItems: 'center'
    },
    input: {
        backgroundColor: "#4e4e4e",
        fontWeight: "bold",
        fontSize: 20,
        width: "80%",
        height: 70,
        margin: 5,
        borderColor: "#ffffff",
        borderWidth: 2,
        borderRadius: 15,
        paddingHorizontal: 15,
        color: "#ffffff",
    },
    txtContainer: {
        flex: 1,
    },
    textinput: {
        width: "80%",
        height: 100,
        backgroundColor: "#4e4e4e",
        borderColor: "#ffffff",
        borderWidth: 2,
        borderRadius: 15,
    },
    titulo: {
        color: '#ffffff',
        fontSize: 35,
        fontWeight: 'bold'
    }
})