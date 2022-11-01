import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../Constants/Colors'
import { LineChart } from 'react-native-svg-charts'

export default function Graph() {
    const data = [-70,-50, 60, 70, 50,10, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80,30]
  return (
    <View style={styles.container}>
      <LineChart
                style={{ height:350}}
                data={data}
                svg={{ stroke:Colors.lemonGree,strokeWidth:2 }}
                contentInset={{ top: 20, bottom: 20 }}
                
            />
    </View>
  )
}

const styles = StyleSheet.create({
container:{
height:350,

}
})