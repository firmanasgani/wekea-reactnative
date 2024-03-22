import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import tabs from './tabs'

const Stack = createNativeStackNavigator()

function HomeScreen({ navigation }) {
    return (
        <View
            style={{
                flex:1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Text>HomeScreen</Text>
            <Button onPress={
                () => navigation.navigate('Details', {
                    itemId: 40,
                }) 
            } title='Pergi ke halaman detail' />
        </View>
    )
}

function DetailScreen({ route, navigation}) {

    return (
        <View
            style={{
                flex:1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Text>DetailScreen</Text>
            <Button onPress={() => navigation.goBack()} title='Kembali' />
        </View>
    )
}

export default function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false}}>
                <Stack.Screen name="main" component={tabs}  />
                <Stack.Screen name="Details" component={DetailScreen}  />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
