import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../Constants/Colors'

export default function Graph() {
  return (
    <View style={styles.container}>
      <Text>Graph</Text>
    </View>
  )
}

const styles = StyleSheet.create({
container:{
height:350,
borderColor:Colors.lemonGree,
borderWidth:1,
borderStyle:'dashed'
}
})