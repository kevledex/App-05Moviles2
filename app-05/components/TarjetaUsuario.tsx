import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TarjetaUsuario(props: any) {
    return (
        <View
            style={styles.container}>

            <View style={styles.txtContainer}>
                
                <Text style={styles.txtnombre}>{props.datos.name.title}{'. '}{props.datos.name.first}{' '}{props.datos.name.last}</Text>

                <Text style={styles.txtdescripcion}>{props.datos.location.city}{', '}{props.datos.location.country}</Text>

                <Text style={styles.txtdescripcion}>{props.datos.email}</Text>

                <Text style={styles.txtdescripcion}>{'Contacto: '}{props.datos.cell}</Text>
            </View>

            <Image
                source={{ uri: props.datos.picture.large}}
                style={styles.img}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#979797",
        margin: 10,
        borderRadius: 15,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    img: {
        width: 85,
        height: 100,
        resizeMode: 'contain',
        marginRight: 15,
    },
    txtContainer: {
        flex: 1,
    },
    txtnombre: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    txtdescripcion: {
        fontSize: 13,
        color: '#ffffff',
        marginBottom: 6,
    }
})