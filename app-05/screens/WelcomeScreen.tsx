import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function WelcomeScreen({ navigation }: any) {
    return (
        <ImageBackground
            source={{ uri: "https://i.postimg.cc/d0PT6YPx/Fondo-Movil.jpg" }}
            style={styles.container}
        >
            <Text style={styles.txt}>BIENVENIDO!</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title='VER LISTAS' onPress={() => navigation.navigate("Drawer")} />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#353535',
        alignItems: 'center',
        paddingTop: 60,
        paddingBottom: 40,
    },
    txt: {
        color: '#ffffff',
        fontSize: 40,
        fontWeight: 'bold',
    },
    buttonContainer: {
        width: '80%',
    }
})
