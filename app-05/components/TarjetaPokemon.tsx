import { Image, StyleSheet, Text, View, TouchableOpacity, Modal, Button } from 'react-native'
import React, { useState } from 'react'

export default function TarjetaPokemon(props: any) {

    const [ocultarModal, setocultarModal] = useState(false)

    return (
        <TouchableOpacity
            onPress={() => setocultarModal(!ocultarModal)}
            style={styles.container}
        >

            <View style={styles.containerTarjet}>
                <Text style={styles.textoNombre}>{props.datos.name}</Text>
                <Text style={styles.texto}>N.° {props.datos.id}</Text>

                <View style={styles.verMasContainer}>
                    <Text style={styles.textoVerMas}>Toca para ver mas</Text>
                </View>
            </View>

            <Image
                style={styles.img}
                source={{ uri: props.datos.sprites.front_default }}
            />

            <Modal
                visible={ocultarModal}
                transparent
            >
                <View style={styles.modal}>

                    <View style={styles.modalContain}>

                        <View style={styles.imgContainerModal}>
                            <Image
                                source={{ uri: props.datos.sprites.front_default }}
                                style={styles.img2}
                            />
                        </View>

                        <Text style={styles.textoNombreModal}>{props.datos.name}</Text>

                        <View style={styles.statsContainer}>
                            <View style={styles.statBox}>
                                <Text style={styles.statLabel}>ID</Text>
                                <Text style={styles.statValue}>N.° {props.datos.id}</Text>
                            </View>
                            <View style={styles.statBox}>
                                <Text style={styles.statLabel}>EXP</Text>
                                <Text style={styles.statValue}>{props.datos.base_experience}</Text>
                            </View>
                            <View style={styles.statBox}>
                                <Text style={styles.statLabel}>Altura</Text>
                                <Text style={styles.statValue}>{props.datos.height / 10} m</Text>
                            </View>
                            <View style={styles.statBox}>
                                <Text style={styles.statLabel}>Peso</Text>
                                <Text style={styles.statValue}>{props.datos.weight / 10} kg</Text>
                            </View>
                        </View>

                        <TouchableOpacity
                            style={styles.btnCerrar}
                            onPress={() => setocultarModal(!ocultarModal)}
                        >
                            <Text style={styles.txtBtnCerrar}>Cerrar</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2C3E50",
        margin: 10,
        borderRadius: 15,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        borderLeftWidth: 5,
        borderLeftColor: '#E3350D'
    },
    img: {
        width: 110,
        height: 110,
        resizeMode: 'contain',
        backgroundColor: '#ffffff2a',
        borderRadius: 55,
    },
    containerTarjet: {
        width: "65%",
        paddingLeft: 10,
    },
    verMasContainer: {
        marginTop: 15,
        backgroundColor: 'rgba(255,255,255,0.1)',
        alignSelf: 'flex-start',
        padding: 8,
        borderRadius: 10,
    },
    textoVerMas: {
        color: '#AAB7B8',
        fontSize: 12,
        fontWeight: 'bold',
    },
    imgContainerModal: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 100,
        padding: 10,
        marginBottom: 15,
        borderWidth: 2,
        borderColor: '#E3350D',
    },
    img2: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    modalContain: {
        backgroundColor: "#1E2A38",
        width: "85%",
        alignSelf: "center",
        borderRadius: 25,
        alignItems: "center",
        padding: 30,
    },
    modal: {
        backgroundColor: "#000000b6",
        flex: 1,
        justifyContent: "center"
    },
    texto: {
        color: "#ffffff",
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 5,
    },
    textoNombre: {
        color: "#ffffff",
        fontWeight: 'bold',
        fontSize: 26,
        textTransform: 'capitalize',
    },
    textoNombreModal: {
        color: "#ffffff",
        fontWeight: 'bold',
        fontSize: 32,
        marginBottom: 20,
        letterSpacing: 1,
    },
    statsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 25,
    },
    statBox: {
        backgroundColor: '#2C3E50',
        width: '48%',
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        marginBottom: 10,
    },
    statLabel: {
        color: '#AAB7B8',
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    statValue: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    btnCerrar: {
        backgroundColor: '#E3350D',
        width: '100%',
        paddingVertical: 15,
        borderRadius: 15,
        alignItems: 'center',
    },
    txtBtnCerrar: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 18,
    }
})