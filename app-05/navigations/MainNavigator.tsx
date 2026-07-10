import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from '../screens/WelcomeScreen';
import SuscripcionScreen from '../screens/SuscripcionScreen';
import UsuariosScreen from '../screens/UsuariosScreen';
import PokemonScreen from '../screens/PokemonScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Welcome' component={WelcomeScreen} />
            <Stack.Screen name='Drawer' component={MyDrawer} />
        </Stack.Navigator>
    )
}

function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Suscripcion' component={SuscripcionScreen} />
            <Drawer.Screen name='Usuarios' component={UsuariosScreen} />
            <Drawer.Screen name='Pokemon' component={PokemonScreen} />
        </Drawer.Navigator>
    )
}

export function MainNavigator() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}