import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../Constants/Colors'
import AppText from './AppText'

export default function AmounList({text,amount}) {
  return (
    <View style={styles.container}>
      <AppText label={true} text={text}/>
      <AppText style={styles.amount} text={amount}/>
    </View>
  )
}

const styles = StyleSheet.create({
   container:{
    height:58,
    width:'100%',
    borderColor:Colors.borderLightColor,
    borderWidth:1,
    borderRadius:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:18,
    marginBottom:7
   },
   amount:{
    fontWeight:'bold'
   }
})