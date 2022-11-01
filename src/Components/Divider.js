import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../Constants/Colors'

export default function Divider() {
  return (
    <View style={styles.container}/>
  )
}
const styles = StyleSheet.create({
container:{
    height:1,
    width:'100%',
    backgroundColor:Colors.borderColor,
    marginTop:10
}
})