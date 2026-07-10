import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TarjetaUsuario from '../components/TarjetaUsuario'

/*
TRAER LOS DATOS DESDE LA API(https://randomuser.me/api/?results=25)

CREAR UNA LISTA PARA VER LOS DATOS MAS IMPORTANTES(+IMAGEN)

(opcional COMPONENTES FUNCIONALES)
*/

export default function UsuariosScreen() {

    const [datos, setusuarios] = useState([])

    useEffect(() => {
        cargarDatos()
    }, [])

    async function cargarDatos() {
        const resp = await fetch('https://randomuser.me/api/?results=25');
        const json = await resp.json();
        setusuarios(json.results);
    }

    return (
        <View>
            <FlatList
                data={datos}
                renderItem={({ item }) => (
                    <TarjetaUsuario datos={item} />
                )} />
        </View>
    )
}

const styles = StyleSheet.create({

})