import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function DefaultScreen() {
  return (
    <View style={styles.container}>
      <Text>Coming soon!!!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
   container:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    backgroundColor:'#ffffff'
   } 
})