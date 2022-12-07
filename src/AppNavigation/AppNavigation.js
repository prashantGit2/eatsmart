import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../Screens/Home';

const Stack = createNativeStackNavigator();
const AppNavigation = ({ AppState }) => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" options={{headerShown:false}}>
                    {(props) => <HomeScreen {...props} AppState={AppState} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation

const styles = StyleSheet.create({})