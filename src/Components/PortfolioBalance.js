import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AppText from './AppText'
import { Colors } from '../Constants/Colors'

export default function PortfolioBalance() {
  return (
    <View style={styles.container}>
      <AppText label={true} text='Portfolio balance'/>
      <AppText style={styles.amountText} text='$38,552.62'/>
      <AppText style={styles.subAmount} text='+$1,439.58(3.88%)'/>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
    marginTop:20,
    height:70,
    paddingHorizontal:20
    },
    amountText:{
        fontWeight:'600',
        fontSize:30
    },
    subAmount:{
    color:Colors.lemonGree
    }
})