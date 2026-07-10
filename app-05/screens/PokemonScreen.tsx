import { FlatList, StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import TarjetaPokemon from '../components/TarjetaPokemon'

export default function PokemonScreen() {

    const [listaPokemons, setlistaPokemons] = useState<any>([])
    const [busqueda, setbusqueda] = useState("")
    const [pokemonSeleccionado, setpokemonSeleccionado] = useState<any>(null)

    useEffect(() => {
        cargarLista()
    }, [])

    async function cargarLista() {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const json = await resp.json();
        setlistaPokemons(json.results);
    }

    async function buscarPokemon(nombre: string) {
        if (nombre === '') return;

        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`);
        if (resp.ok) {
            const json = await resp.json();
            setpokemonSeleccionado(json);
            setbusqueda('');
        } else {
            setpokemonSeleccionado(null);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Pokédex</Text>

            <View style={styles.buscador}>
                <TextInput
                    style={styles.input}
                    placeholder="Escribe el nombre del pokemon"
                    placeholderTextColor="#666"
                    value={busqueda}
                    onChangeText={setbusqueda}
                />
                <Button
                    title="Buscar"
                    color="#E3350D"
                    onPress={() => buscarPokemon(busqueda)}
                />
            </View>

            {pokemonSeleccionado ? (
                <TarjetaPokemon datos={pokemonSeleccionado} />
            ) : (
                <Text style={styles.txtInstruccion}>Busca un Pokémon</Text>
            )}

            <Text style={styles.subtitulo}>Lista de Pokémon</Text>

            <FlatList
                data={listaPokemons}
                keyExtractor={(item) => item.name}
                renderItem={({ item }: any) => (
                    <TouchableOpacity
                        style={styles.itemLista}
                        onPress={() => buscarPokemon(item.name)}
                    >
                        <Text style={styles.txtItem}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
        paddingTop: 20,
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: 15,
    },
    buscador: {
        marginHorizontal: 15,
        marginBottom: 10,
    },
    input: {
        backgroundColor: '#ffffff',
        color: '#000000',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 8,
        marginBottom: 10,
        fontSize: 16,
    },
    txtInstruccion: {
        color: '#aaaaaa',
        textAlign: 'center',
        marginVertical: 20,
        fontStyle: 'italic',
    },
    subtitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        marginLeft: 15,
        marginTop: 10,
        marginBottom: 10,
    },
    itemLista: {
        backgroundColor: '#333333',
        padding: 15,
        marginHorizontal: 15,
        marginBottom: 8,
        borderRadius: 8,
    },
    txtItem: {
        color: '#ffffff',
        fontSize: 16,
        textTransform: 'capitalize',
    }
})