import { Platform, StatusBar, StyleSheet } from 'react-native'

export default GlobalStyles = StyleSheet.create({
    safeAreaStyle: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
}) 