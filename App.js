import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import GlobalStyles from './src/styles/GlobalStyles'
import Routes from './src/routes'

export default function App() {
 
  return (
    <SafeAreaView style={GlobalStyles.safeAreaStyle}>
      <Routes />
    </SafeAreaView>
  )
}