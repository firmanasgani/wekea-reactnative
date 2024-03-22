import { View, Text, Button } from 'react-native'
function DetailScreen( { navigation }) {

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

export default DetailScreen